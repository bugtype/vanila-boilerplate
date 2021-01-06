import { Component } from '../../helper';
import {
  TimerHeader,
  QuestionWord,
  QuestionInput,
  GameStartButton,
} from '../../components';
import './style.css';
import { HomePageViewModel } from '../../viewModels';

type Status = 'fetching' | 'waiting' | 'playing' | 'error';

export interface HomePageState {
  score: number;
  remainingTime: number;

  guessWord: string;
  status: Status;
}

export default class HomePage extends Component {
  $target: HTMLElement;

  $container: HTMLElement;
  $header: TimerHeader;
  $content: QuestionWord;
  $input: QuestionInput;
  $gameButton: GameStartButton;

  vm: HomePageViewModel;
  state: HomePageState = {
    score: 0,
    remainingTime: 0,
    guessWord: '',
    status: 'fetching',
  };

  constructor($target: HTMLElement) {
    super();
    this.$target = $target;

    // view model
    this.vm = new HomePageViewModel();
    this.vm.setObserverCallback((vm: HomePageState) => {
      this.setState(vm);
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.setState = this.setState.bind(this);

    this.$container = document.createElement('div');
    this.$container.classList.add('home-container');
    $target.appendChild(this.$container);

    // header
    const header = new TimerHeader({
      $target: this.$container,
    });
    this.$header = header;

    const board = document.createElement('div');
    board.classList.add('home-board');
    this.$container.appendChild(board);

    // content
    const content = new QuestionWord({
      $target: board,
      text: 'Waiting...',
    });
    this.$content = content;

    // input
    const input = new QuestionInput({
      $target: board,
      placeHolder: '입력',
      onEnter: this.handleInputChange,
    });
    this.$input = input;

    // game start
    const gameButton = new GameStartButton({
      $target: board,
      onButtonClick: this.handleButtonClick,
    });
    this.$gameButton = gameButton;
  }

  handleButtonClick() {
    if (this.state.status === 'playing') {
      this.vm.clearGame();
    } else {
      this.vm.startGame();
      this.$input.focus();
    }
  }

  handleInputChange(e: any) {
    const userInputText = e.target.value;
    this.vm.enterUserInput(userInputText);
    // 틀려도 초기화
    this.$input.setState({ value: '' });
  }

  // set State
  setState(state: HomePageState) {
    this.state = {
      ...state,
    };

    this.$header.setState({
      time: state.remainingTime,
      score: state.score,
    });

    this.$content.setState({
      text: state.status === 'playing' ? this.state.guessWord : '문제 단어',
    });
    this.$gameButton.setState({
      waiting: state.status === 'fetching' || state.status === 'waiting',
    });
  }
}
