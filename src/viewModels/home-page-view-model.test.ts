import { HomePageViewModel } from '.';
import { wordService, resultService } from '../services';

const wordServiceGetAllMock = jest.fn();
const resultServiceSetResultMock = jest.fn();

const alertMock = jest.fn();
const updateCallbackMock = jest.fn();

jest.spyOn(window, 'alert').mockImplementation(alertMock);
jest.spyOn(wordService, 'getAll').mockImplementation(wordServiceGetAllMock);
jest
  .spyOn(resultService, 'setResult')
  .mockImplementation(resultServiceSetResultMock);

const navigationToResultMock = jest.fn();

jest.mock('../libs', () => ({
  navigationToResultPage: () => navigationToResultMock(),
}));

// Given
describe('유저가 처음 Home 화면 진입. start를 호출하여 데이터를 받아온다., ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // When
  test('데이터를 받아오는데 실패하면 ', async (done) => {
    wordServiceGetAllMock.mockRejectedValue(new Error('Network Failed'));
    const viewModel = new HomePageViewModel();
    await new Promise((r) => setTimeout(r, 10)); // Fetch Waiting
    viewModel.setObserverCallback(updateCallbackMock);
    viewModel.startGame();

    // alert에러가 발생하고, wordList가 비어있고, 상태가 error
    expect(alertMock.mock.calls.length).toBe(1);
    expect(viewModel.state.wordList).toEqual([]);
    expect(viewModel.state.status).toBe('error');

    done();
  });

  // When
  test('데이터를 받아오는데 성공하면 ', async (done) => {
    const wordListMock = [
      {
        second: 2,
        text: 'word',
      },
      {
        second: 2,
        text: 'word',
      },
    ];
    wordServiceGetAllMock.mockReturnValue(wordListMock);

    const viewModel = new HomePageViewModel();
    await new Promise((r) => setTimeout(r, 10)); // Fetch Waiting
    viewModel.setObserverCallback(updateCallbackMock);
    viewModel.startGame();

    // 에러가 발생 안하고, state에 wordList가 반영되고, 상태가 playing
    expect(alertMock.mock.calls.length).toBe(0);
    expect(viewModel.state.wordList).toEqual(wordListMock);
    expect(viewModel.state.status).toBe('playing');

    done();
  });
});

// Given
describe('총 문제가 2문제이고, 유저가 첫 번째 문제를 풀고 있고,  ', () => {
  let viewModel: HomePageViewModel;
  beforeEach(async () => {
    jest.clearAllMocks();
    const wordListMock = [
      {
        second: 2,
        text: 'word',
      },
      {
        second: 10,
        text: 'hello',
      },
    ];
    wordServiceGetAllMock.mockReturnValue(wordListMock);

    viewModel = new HomePageViewModel();
    await new Promise((r) => setTimeout(r, 10)); // Fetch Waiting
    viewModel.setObserverCallback(updateCallbackMock);
    viewModel.startGame();
  });

  // When
  test('푸는데 실패하면 ', async (done) => {
    viewModel.enterUserInput('aaaaaaaaaaaa');

    // currentIdx는 그대로이다.
    expect(viewModel.state.currentIdx).toBe(0);

    done();
  });

  // When
  test('푸는데 성공하면 ', async (done) => {
    viewModel.enterUserInput('word');

    // currentIdx가 하나 올라간다.
    expect(viewModel.state.currentIdx).toBe(1);

    done();
  });
});

// Given
describe('유저가 마지막 문제를 풀고 있고,  ', () => {
  let viewModel: HomePageViewModel;
  beforeEach(async () => {
    jest.clearAllMocks();
    const wordListMock = [
      {
        second: 2,
        text: 'word',
      },
    ];
    wordServiceGetAllMock.mockReturnValue(wordListMock);

    viewModel = new HomePageViewModel();
    await new Promise((r) => setTimeout(r, 10)); // Fetch Waiting
    viewModel.setObserverCallback(updateCallbackMock);
    viewModel.startGame();
  });

  // When
  test('푸는데 실패하면 ', async (done) => {
    viewModel.enterUserInput('aaaaaaaaaaaa');

    // result navigation이 호출되지 않는다.
    // result 서비스에 setResult가 호출되지 않는다.
    expect(navigationToResultMock.mock.calls.length).toBe(0);
    expect(resultServiceSetResultMock.mock.calls.length).toBe(0);

    done();
  });

  // When
  test('푸는데 성공하면 ', async (done) => {
    viewModel.enterUserInput('word');

    // result navigation이 호출된다.
    // result 서비스에 setResult가 호출된다.
    expect(navigationToResultMock.mock.calls.length).toBe(1);
    expect(resultServiceSetResultMock.mock.calls.length).toBe(1);

    done();
  });
});
