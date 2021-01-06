import { Word } from '../entities';
import wordService from './word-service';

const mock: Word[] = [
  {
    second: 3,
    text: 'hello',
  },
  {
    second: 5,
    text: 'world',
  },
];

jest.mock('../libs', () => ({
  httpClient: {
    get: () => mock,
  },
}));

// Given
describe('유저가 처음 Home 화면 진입시', () => {
  const _wordService = wordService;

  // When
  test('wordService의 getAll을 호출하면', async (done) => {
    const result = await _wordService.getAll();
    // mock 데이터를 받아온다.
    expect(result).toBe(mock);
    done();
  });
});
