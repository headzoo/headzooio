'use strict';

import * as endpoints from './endpoints';

export default class Posts
{
  /**
   * 
   * @returns {*|Promise.<T>}
   */
  static fetchAll() {
    const config = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };
    
    return fetch(endpoints.POSTS, config)
      .then(resp => {
        return resp.json();
      })
      .catch(error => {
        return error;
      });
  }
}
