import { Word } from '../entities';
import { ViewModel } from '../helper';
import { navigationToResultPage } from '../libs';
import { HomePageState } from '../pages/HomePage';
import { resultService, wordService } from '../services';

interface State {
  score: number;
  remainingTime: number;

  wordList: Word[];
  currentIdx: number;
  status: Status;

  // guess 관련
  userGuessTimeList: number[];
  guessTime: number;
}

type Status = 'fetching' | 'waiting' | 'playing' | 'error';

const REDUCE_TIME = 1000;

// NOTE: 여기서만 사용중.
function getAvg(arr: number[]) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return Math.floor(result / arr.length);
}

export default class HomePageViewModel extends ViewModel<HomePageState> {
  private timer: NodeJS.Timeout = null;

  state: State = {
    score: 0,
    remainingTime: 0,

    wordList: [],
    currentIdx: 0,
    status: 'fetching',

    userGuessTimeList: [],
    guessTime: 0,
  };

  constructor() {
    super();
    this._fetchWord();
  }

  enterUserInput(userInputText: string) {
    const { currentIdx } = this.state;

    // 단어 맞을 경우
    if (userInputText === this.state.wordList[currentIdx].text) {
      this._wordSuccess();
      this._nextWord();
    }
  }

  startGame() {
    if (this.state.wordList.length == 0) {
      alert('서버에서 단어 받아오는데 실패... 새로고침해주세요.');
      this.state = {
        ...this.state,
        status: 'error',
      };
      return;
    }

    this.state = {
      ...this.state,
      remainingTime: this.state.wordList[this.state.currentIdx].second,
      score: this.state.wordList.length,
      guessTime: new Date().getTime(),
      status: 'playing',
    };

    this._update();
    this._startTimer();
  }

  clearGame() {
    this.state = {
      ...this.state,
      status: 'waiting',
      score: this.state.wordList.length,
      remainingTime: 0,
      currentIdx: 0,
    };

    clearInterval(this.timer);
    this._update();
  }

  getState() {
    return this.state;
  }

  private async _fetchWord() {
    try {
      const words = await wordService.getAll();
      this.state = {
        ...this.state,
        score: words.length,
        wordList: words,
        currentIdx: 0,
      };

      this.update({
        score: 0,
        remainingTime: 0,
        guessWord: '',
        status: 'waiting',
      });
    } catch (e) {}
  }

  private _update() {
    this.update({
      score: this.state.score,
      remainingTime: this.state.remainingTime,
      guessWord: this.state.wordList[this.state.currentIdx].text,
      status: this.state.status,
    });
  }

  private _minusScore() {
    this.state = { ...this.state, score: this.state.score - 1 };
  }

  private _wordSuccess() {
    const currentTime = new Date().getTime();
    this.state = {
      ...this.state,
      userGuessTimeList: this.state.userGuessTimeList.concat(
        Math.floor((currentTime - this.state.guessTime) / 1000)
      ),
    };
  }

  private _startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      // 0초면 다음 문제
      if (!this.state.remainingTime) {
        this._minusScore();
        this._nextWord();
        return;
      }
      const reducedTime = this.state.remainingTime - 1;
      this.state = { ...this.state, remainingTime: reducedTime };
      this._update();
    }, REDUCE_TIME);
  }

  // 성공하거나 시간초과 되면, next word
  private _nextWord() {
    const nextIdx = this.state.currentIdx + 1;
    const currentTime = new Date().getTime();

    // 마지막 단어일 경우
    if (nextIdx === this.state.wordList.length) {
      clearInterval(this.timer);
      resultService.setResult({
        score: this.state.score,
        avg: getAvg(this.state.userGuessTimeList) || 0,
      });
      navigationToResultPage();
      return;
    }

    this.state = {
      ...this.state,
      remainingTime: this.state.wordList[nextIdx].second,
      guessTime: currentTime,
      currentIdx: nextIdx,
    };
    this._update();
  }
}
