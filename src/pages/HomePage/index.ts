import { Component } from '../../helper';

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
    this.vm.setObserverCallback((vm: HomePageState) => {});

    this.render();
  }

  render() {
    this.$target.innerHTML = 'HomePage';
    // test
    const test = document.createElement('button');
    test.innerHTML = 'click me';
    test.addEventListener('click', () => {
      alert('click');
      console.log('click');
    });
    this.$target.appendChild(test);
    console.log('error');
    throw new Error('eerrroror');
  }
}
