import router from './router';

export const navigator = {
  push: (path: string) => {
    history.pushState(null, null, path);
  },
};

const navigationTo = (path: string) => {
  const _path = router.isHash() ? path.replace('/', '#') : path;
  navigator.push(_path);
  router.check();
};

export const navigationToHomePage = () => navigationTo('/');
export const navigationToResultPage = () => navigationTo('/result');
