import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable'
import Router from './router';
import store from './store';
import '../scss/main.scss';




Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <Router/>
    </Provider>,
    document.querySelector('#app')
  );
});