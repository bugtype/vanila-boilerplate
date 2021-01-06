import { Component } from '../../helper';
import './style.css';

interface State {}

type Props = TargetElement & { onClick: () => void };
class GameRestartButton extends Component {
  $gameRestartButton: HTMLElement = null;
  state: State = {};

  constructor({ $target, onClick }: Props) {
    super();

    const $gameRestartButton = document.createElement('div');
    this.$gameRestartButton = $gameRestartButton;
    this.$gameRestartButton.classList.add('game-button');
    $target.appendChild($gameRestartButton);

    $gameRestartButton.addEventListener('click', () => onClick());

    this.render();
  }

  render() {
    this.$gameRestartButton.innerHTML = `다시 시작`;
  }
}

export default GameRestartButton;
