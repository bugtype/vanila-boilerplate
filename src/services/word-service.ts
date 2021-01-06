import { Word } from '../entities';
import { httpClient } from '../libs';

const url = 'https://';

interface IWordService {
  getAll: () => Promise<Word[]>;
}

const tempData = [
  {
    second: 10,
    text: 'hello',
  },
  {
    second: 10,
    text: 'world',
  },
  {
    second: 8,
    text: 'this',
  },
  {
    second: 3,
    text: 'is',
  },
  {
    second: 15,
    text: 'frontend-bugtype',
  },
  {
    second: 5,
    text: 'we',
  },
  {
    second: 5,
    text: 'are',
  },
  {
    second: 15,
    text: 'frontend-bugtype',
  },
  {
    second: 15,
    text: 'frontend',
  },
  {
    second: 20,
    text: 'developers',
  },
  {
    second: 15,
    text: 'join',
  },
  {
    second: 10,
    text: 'us',
  },
];

// TODO: cache 처리
const wordService: IWordService = {
  getAll: async () => {
    // return tempData;

    // cache는 기획여부에 따라 정해야한다. ( api 호출할 때마다 데이터가 변경될 수도 있으니 )
    // 네트워크 실패할 떄 보여주는게 좋으려나? 근데 page view model에 새로고침하라는 alert가 있으므로... 주석처리
    // let data: Word[];
    // try {
    //   data = await httpClient.get<Word[]>(url);
    // } catch (e) {
    //   data = tempData;
    // }

    return await httpClient.get<Word[]>(url);
  },
};

export default wordService;
