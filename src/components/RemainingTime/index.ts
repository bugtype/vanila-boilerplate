import { Component } from '../../helper';

interface State {
  remainingTime: number;
}

class RemainingTime extends Component {
  $el: HTMLElement = null;
  state: State = {
    remainingTime: 0,
  };

  constructor({ $target }: TargetElement) {
    super();

    const $el = document.createElement('div');

    this.$el = $el;
    $target.appendChild($el);

    this.render();
  }

  setState(state: State) {
    this.state = { ...state };
    this.render();
  }

  render() {
    this.$el.innerHTML = `<div> 남은 시간 : ${this.state.remainingTime}초 </div>`;
  }
}

export default RemainingTime;
