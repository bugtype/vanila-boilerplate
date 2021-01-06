import { store } from '../libs';

const resultService = {
  getResult: () => {
    try {
      const result = store.getItem('result');
      return result ? JSON.parse(result) : null;
    } catch (e) {
      return null;
    }
  },
  setResult: (param: { score: number; avg: number }) =>
    store.setItem('result', JSON.stringify(param)),
};

export default resultService;
