import { Component } from '../helper';

interface RouteConfig {
  rootEl: HTMLElement | null;
  routes: Route[];
  failPage: new (el: HTMLElement) => Component;
  hash: boolean;
}

let global: RouteConfig = {
  rootEl: null,
  routes: [],
  failPage: null,
  hash: false,
};

interface Route {
  path: string;
  component: new (el: HTMLElement) => Component;
}

const router = {
  config: (config: RouteConfig) => {
    global = { ...config };
  },
  isHash: () => global.hash,
  check: () => {
    const currentPath = global.hash
      ? window.location.hash.replace('#', '/')
      : window.location.pathname;

    const matchRoute = global.routes.filter(
      (route) => route.path === currentPath
    );

    global.rootEl.innerHTML = '';
    if (matchRoute.length) {
      new matchRoute[0].component(global.rootEl);
    } else {
      new global.failPage(global.rootEl);
    }
  },
};

window.addEventListener('popstate', router.check);
window.addEventListener('DOMContentLoaded', router.check);

export default router;
