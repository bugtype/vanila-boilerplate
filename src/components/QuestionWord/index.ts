import { Component } from '../../helper';

interface State {
  text: string;
}

type Props = TargetElement & { text: string };

class QuestionWord extends Component {
  $questionWord: HTMLElement = null;
  state: State = {
    text: '',
  };

  constructor({ $target, text }: Props) {
    super();
    this.state.text = text;
    const $questionWord = document.createElement('div');

    this.$questionWord = $questionWord;
    $target.appendChild($questionWord);

    this.render();
  }

  setState(state: State) {
    const isDifference = this.state.text !== state.text;
    this.state = { ...state };
    // TODO: 얆은 비교 로직 구현해야함.
    isDifference && this.render();
  }

  render() {
    this.$questionWord.innerHTML = `
            <div class="home-word"> ${this.state.text} </div>
        `;
  }
}

export default QuestionWord;
