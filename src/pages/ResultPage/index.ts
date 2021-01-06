import { Component } from '../../helper';
import { GameReStartButton } from '../../components';
import './style.css';
import { ResultPageViewModel } from '../../viewModels';

export default class ResultPage extends Component {
  $target: HTMLElement;
  $el: HTMLElement;
  $result: HTMLElement;
  $button: GameReStartButton;

  vm: ResultPageViewModel;

  constructor($target: HTMLElement) {
    super();
    this._handleOnClick = this._handleOnClick.bind(this);

    this.vm = new ResultPageViewModel();
    if (this.vm.state.error) {
      return;
    }

    this.$el = document.createElement('div');
    this.$el.classList.add('result-root');
    $target.appendChild(this.$el);

    this.$result = document.createElement('div');
    this.$result.classList.add('result-container');
    this.$el.appendChild(this.$result);

    this.$button = new GameReStartButton({
      $target: this.$el,
      onClick: this._handleOnClick,
    });

    this.render();
  }

  private _handleOnClick() {
    this.vm.goHomePage();
  }

  render() {
    this.$result.innerHTML = `
      <div class="result-success"> Mission Complete! </div>
      <div class="result-score"> 당신의 점수는 ${this.vm.state.score}점입니다. </div>
      <div class="result-avg-time"> 단어당 평균 답변 시간은 ${this.vm.state.avg}초 입니다.  </div>
    `;
  }
}
