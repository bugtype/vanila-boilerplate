import ResultPageViewModel from './result-page-view-model';

const resultServiceGetResultMock = jest.fn();
const alertMock = jest.fn();
const updateMock = jest.fn();

const navigationMock = jest.fn();

jest.spyOn(window, 'alert').mockImplementation(alertMock);

jest.mock('../libs', () => ({
  navigationToHomePage: () => navigationMock(),
}));

jest.mock('../services', () => ({
  resultService: {
    getResult: () => resultServiceGetResultMock(),
  },
}));

// TODO: timer mocking

// Given
describe('유저가 처음 Result 화면 진입. ', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // When
  test(' 데이터를 못받아 을 떄, ', () => {
    resultServiceGetResultMock.mockReturnValue(null);

    const viewModel = new ResultPageViewModel();

    // alert 에러가 발생한다.
    expect(alertMock.mock.calls.length).toBe(1);
    expect(navigationMock.mock.calls.length).toBe(1);
    expect(viewModel.state.score).toBe(0);
    expect(viewModel.state.avg).toBe(0);
  });

  // When
  test(' 데이터를 성공적으로 받아 올떄, ', () => {
    resultServiceGetResultMock.mockReturnValue({
      score: 10,
      avg: 10,
    });

    const viewModel = new ResultPageViewModel();
    viewModel.setObserverCallback(updateMock);

    // 상태에 점수가 반영된다.
    expect(alertMock.mock.calls.length).toBe(0);
    expect(navigationMock.mock.calls.length).toBe(0);
    expect(viewModel.state.score).toBe(10);
    expect(viewModel.state.avg).toBe(10);
  });
});
