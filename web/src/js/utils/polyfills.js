/* eslint-disable */
import "babel-polyfill";
import Promise from 'promise-polyfill';
if (!window.Promise) {
  window.Promise = Promise;
}
import 'whatwg-fetch';
