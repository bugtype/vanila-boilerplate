import { Component } from '../../helper';

interface State {
  waiting: boolean;
}

type Props = TargetElement & { onButtonClick: () => void };

class GameStartButton extends Component {
  $gameStartButton: HTMLElement = null;
  state: State = {
    waiting: true,
  };

  constructor({ $target, onButtonClick }: Props) {
    super();

    const $gameStartButton = document.createElement('div');
    this.$gameStartButton = $gameStartButton;
    this.$gameStartButton.classList.add('game-button');
    $target.appendChild($gameStartButton);

    $gameStartButton.addEventListener('click', () => onButtonClick());

    this.render();
  }

  setState({ waiting }: { waiting: boolean }) {
    const isDifference = this.state.waiting !== waiting;
    this.state = { waiting };
    // TODO: 얆은 비교 로직 구현해야함.
    isDifference && this.render();
  }

  render() {
    this.$gameStartButton.innerHTML = `${
      this.state.waiting ? ' 시작' : '초기화'
    }`;
  }
}

export default GameStartButton;
