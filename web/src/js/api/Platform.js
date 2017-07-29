import Auth from 'api/Auth';

class Platform {
  static cache = {};

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
   * @param {string} endpoint
   * @param {*} config
   * @param {string} cacheKey
   * @returns {Promise}
   */
  fetchCached(endpoint, config, cacheKey) {
    if (this.cacheExists(cacheKey)) {
      return new Promise((resolve) => {
        resolve(this.cacheGet(cacheKey));
      });
    }

    return fetch(endpoint, config)
      .then(resp => resp.json())
      .then((json) => {
        this.cacheSet(cacheKey, json);
        return json;
      })
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

  /**
   *
   * @param {string} key
   * @param {*} value
   */
  cacheSet(key, value) {
    Platform.cache[key] = value;
  }

  /**
   *
   * @param {string} key
   * @returns {*}
   */
  cacheGet(key) {
    return Platform.cache[key];
  }

  /**
   *
   * @param {string} key
   * @returns {boolean}
   */
  cacheExists(key) {
    return Platform.cache[key] !== undefined;
  }
}

export default Platform;
