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

  /**
   *
   * @returns {*|Promise.<T>}
   */
  static submit(values) {
    const config = {
      method:  'POST',
      body:    JSON.stringify(values),
      headers: {
        Accept:         'application/json',
        'Content-Type': 'application/json'
      }
    };

    return fetch(endpoints.POSTS, config)
      .then(resp => resp.json())
      .catch(error => error);
  }
}
