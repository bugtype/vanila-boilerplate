//@ts-nocheck

import resultService from './result-service';

const storeMock = {};
jest.mock('../libs', () => ({
  store: {
    getItem: (key) => storeMock[key] || null,
    setItem: (key, value) => (storeMock[key] = value),
  },
}));

// Given
describe('유저가 기록이 없을 때', () => {
  const _resultService = resultService;

  //  When
  test('resultService의 get result를 호출하면', () => {
    const result = _resultService.getResult();
    expect(result).toEqual(null);
  });

  //  When
  test('resultService의 set Result 호출하면', () => {
    const testValue = {
      score: 10,
      avg: 5,
    };
    _resultService.setResult(testValue);
    const result = _resultService.getResult();
    // get item에서 같은 값을 받아온다.
    expect(result).toEqual(testValue);
  });
});

// Given
describe('유저가 기록이 있을 때', () => {
  const _resultService = resultService;
  const testMock = {
    score: 10,
    avg: 11,
  };
  beforeEach(() => {
    storeMock = { result: JSON.stringify(testMock) };
  });

  //  When
  test('resultService의 get result를 호출하면', () => {
    const result = _resultService.getResult();

    // mock 데이터를 받아온다.
    expect(result).toEqual(testMock);
  });

  //  When
  test('resultService의 set Result 호출하면', () => {
    const testValue = {
      score: 10,
      avg: 4,
    };
    _resultService.setResult(testValue);
    const result = _resultService.getResult();
    // get item에서 같은 값을 받아온다.
    expect(result).toEqual(testValue);
  });
});
