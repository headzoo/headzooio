import Auth from 'api/Auth';

class Platform {

  /**
   *
   * @param {string} endpoint
   * @param {*} config
   * @returns {Promise}
   */
  fetch(endpoint, config) {
    return fetch(endpoint, config)
      .then(resp => resp.json())
      .catch(error => error);
  }

  /**
   *
   * @param {string} method
   * @param {*|string} extraHeaders
   * @param {string|null} body
   * @returns {{method: *, body: *, headers: {Accept: string}}}
   */
  buildConfig(method, extraHeaders = {}, body = null) {
    if (typeof extraHeaders === 'string') {
      body = extraHeaders;
      extraHeaders = {};
    }
    const headers = this.buildHeaders(extraHeaders);

    return {
      method,
      body,
      headers
    };
  }

  /**
   *
   * @param {*} extra
   * @returns {{Accept: string}}
   * @private
   */
  buildHeaders(extra = {}) {
    const headers = {
      Accept:         'application/json',
      'Content-Type': 'application/json'
    };
    if (Auth.isAuthenticated()) {
      headers.Authorization = `Bearer ${Auth.getToken()}`;
    }

    return Object.assign({}, headers, extra);
  }
}

export default Platform;
