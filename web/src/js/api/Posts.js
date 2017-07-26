import * as endpoints from 'api/endpoints';
import Auth from 'api/Auth';

export default class Posts {
  /**
   *
   * @returns {*|Promise.<T>}
   */
  static fetchAll() {
    const config = {
      method:  'GET',
      headers: Posts.buildHeaders()
    };

    return fetch(endpoints.POSTS, config)
      .then(resp => resp.json())
      .catch(error => error);
  }

  /**
   *
   * @param {number} id
   * @returns {Promise.<T>|*}
   */
  static fetchById(id) {
    const config = {
      method:  'GET',
      headers: Posts.buildHeaders()
    };

    return fetch(`${endpoints.POSTS}/${id}`, config)
      .then(resp => resp.json())
      .catch(error => error);
  }

  /**
   *
   * @param {number} id
   * @returns {Promise.<T>|*}
   */
  static deleteById(id) {
    const config = {
      method:  'DELETE',
      headers: Posts.buildHeaders()
    };

    return fetch(`${endpoints.POSTS}/${id}`, config)
      .then(resp => resp.json())
      .catch(error => error);
  }

  /**
   *
   * @returns {*|Promise.<T>}
   */
  static submit(values, id = 0) {
    const headers = Posts.buildHeaders();
    headers['Content-Type'] = 'application/json';

    const config = {
      method: id === 0 ? 'POST' : 'PUT',
      body:   JSON.stringify(values),
      headers
    };

    return fetch(id === 0 ? endpoints.POSTS : `${endpoints.POSTS}/${id}`, config)
      .then(resp => resp.json())
      .catch(error => error);
  }

  /**
   *
   * @returns {{Accept: string}}
   * @private
   */
  static buildHeaders() {
    const headers = {
      Accept: 'application/json'
    };
    if (Auth.isAuthenticated()) {
      headers.Authorization = `Bearer ${Auth.getToken()}`;
    }

    return headers;
  }
}
