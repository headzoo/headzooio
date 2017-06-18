'use strict';

export default class PostAPI {
  static fetchAll() {
    return fetch('/api/posts.json')
      .then(resp => {
        return resp.json();
      })
      .catch(error => {
        return error;
      });
  }
}
