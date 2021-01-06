import { ViewModel } from '../helper';
import { navigationToHomePage } from '../libs';
import { resultService } from '../services';

interface ResultPageViewModelState {
  score: number;
  avg: number;
  error: boolean;
}
export default class ResultPageViewModel extends ViewModel<ResultPageViewModelState> {
  state = {
    score: 0,
    avg: 0,
    error: false,
  };

  constructor() {
    super();
    const result = resultService.getResult();

    if (!result) {
      this.state.error = true;
      alert('플레이를 해주세요.');
      this.goHomePage();
      return;
    }
    this.state = {
      score: result.score,
      avg: result.avg,
      error: false,
    };
  }
  goHomePage() {
    navigationToHomePage();
  }
}
