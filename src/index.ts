import App from './App';

new App({ $target: document.querySelector('#App') });

// HMR
if (module.hot) {
  module.hot.accept('../public/bundle.js', function () {
    console.log('Updating!');
  });
}
