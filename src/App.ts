import { Component } from './helper';
import { router } from './libs';
import { HomePage } from './pages';
import './style.css';
export default class App extends Component {
  $target: HTMLElement = null;
  app: HTMLElement;

  constructor({ $target }: { $target: HTMLElement }) {
    super();

    router.config({
      rootEl: $target,
      routes: [
        {
          path: '/',
          component: HomePage,
        },
        // {
        //   path: '/result',
        //   component: ResultPage,
        // },
      ],
      failPage: HomePage,
      hash: true,
    });
  }
}
