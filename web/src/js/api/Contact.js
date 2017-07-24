import * as endpoints from './endpoints';

export default class Contact {
  /**
   *
   * @param {*} values
   * @returns {*|Promise.<T>}
   */
  static submit(values) {
    const config = {
      method:  'POST',
      body:    JSON.stringify(values),
      headers: {
        Accept: 'application/json'
      }
    };

    return fetch(endpoints.CONTACT, config)
      .then(resp => resp.json())
      .catch(error => error);
  }
}
