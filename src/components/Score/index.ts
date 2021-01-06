import { Component } from '../../helper';
import './index.css';
interface State {
  score: number;
}

type Props = TargetElement & { score: number };

class Score extends Component {
  $el: HTMLElement = null;

  $scoreEl: HTMLElement = null;
  $minusEl: HTMLElement = null;
  state: State = {
    score: 0,
  };

  constructor({ $target, score }: Props) {
    super();

    this.state.score = score;

    const $el = document.createElement('div');
    this.$el = $el;
    $target.appendChild($el);

    const scoreEl = document.createElement('div');
    scoreEl.innerHTML = `<div> 점수 : ${this.state.score} </div>`;

    const minusEl = document.createElement('div');
    minusEl.classList.add('header-minus');
    minusEl.innerHTML = '-1';

    this.$scoreEl = scoreEl;
    this.$minusEl = minusEl;
    $el.appendChild(scoreEl);
    $el.appendChild(minusEl);

    this.render();
  }
  showMinusAnimation() {
    this.$minusEl.classList.remove('minus__animation');
    // draw
    void this.$minusEl.offsetWidth;
    this.$minusEl.classList.add('minus__animation');
  }

  setState(state: State) {
    this.state = { ...state };
    this.render();
  }

  render() {
    this.$scoreEl.innerHTML = `<div> 점수 : ${this.state.score} </div>`;
  }
}

export default Score;
