import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store/store';
import { postsLoad } from 'actions/postActions';
import App from 'components/App';

if (!window.Promise) {
  window.Promise = Promise;
}

store.dispatch(postsLoad());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('mount')
);
