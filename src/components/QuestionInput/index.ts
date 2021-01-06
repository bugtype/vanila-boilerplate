import { Component } from '../../helper';

interface State {}

type Props = TargetElement & { placeHolder: string; onEnter: (e: any) => void };

class QuestionInput extends Component {
  $questionInput: HTMLInputElement = null;
  state: State = {};

  constructor({ $target, placeHolder, onEnter }: Props) {
    super();
    const $questionInput = document.createElement('input');

    this.$questionInput = $questionInput;
    $target.appendChild($questionInput);
    $questionInput.placeholder = placeHolder;
    $questionInput.addEventListener('change', onEnter);
    $questionInput.addEventListener(
      'focus',
      () => ($questionInput.placeholder = '')
    );

    this.render();
  }

  focus() {
    this.$questionInput.focus();
  }

  setState({ value }: { value: string }) {
    this.$questionInput.value = value;
  }

  render() {}
}

export default QuestionInput;
