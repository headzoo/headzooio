import * as endpoints from 'api/endpoints';

export default class Posts {
  /**
   *
   * @returns {*|Promise.<T>}
   */
  static fetchAll() {
    const config = {
      method:  'GET',
      headers: {
        Accept: 'application/json'
      }
    };

    return fetch(endpoints.POSTS, config)
      .then(resp => resp.json())
      .catch(error => error);
  }

  static fetchById(id) {
    const config = {
      method:  'GET',
      headers: {
        Accept: 'application/json'
      }
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
    const config = {
      method:  id === 0 ? 'POST' : 'PUT',
      body:    JSON.stringify(values),
      headers: {
        Accept:         'application/json',
        'Content-Type': 'application/json'
      }
    };

    return fetch(id === 0 ? endpoints.POSTS : `${endpoints.POSTS}/${id}`, config)
      .then(resp => resp.json())
      .catch(error => error);
  }
}
