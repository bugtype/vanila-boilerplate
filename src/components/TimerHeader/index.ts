import { Component } from '../../helper';
import RemainingTime from '../RemainingTime';
import Score from '../Score';

interface State {
  time: number;
  score: number;
}

class TimerHeader extends Component {
  $header: HTMLElement = null;
  $remaining: RemainingTime = null;
  $score: Score = null;

  state: State = {
    time: 0,
    score: 0,
  };

  constructor({ $target }: TargetElement) {
    super();

    const $header = document.createElement('div');
    $header.classList.add('home-header');

    this.$header = $header;
    $target.appendChild($header);

    this.$remaining = new RemainingTime({ $target: $header });
    this.$score = new Score({ $target: $header, score: 0 });

    this.render();
  }

  setState(state: State) {
    if (state.score !== this.state.score) {
      this.$score.setState({ score: state.score });
      if (state.score < this.state.score) {
        this.$score.showMinusAnimation();
      }
    }
    if (state.time !== this.state.time) {
      this.$remaining.setState({ remainingTime: state.time });
    }
    this.state = { ...state };
  }

  render() {}
}

export default TimerHeader;
