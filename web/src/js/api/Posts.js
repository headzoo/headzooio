import * as endpoints from 'api/endpoints';
import Auth from 'api/Auth';

class Posts {
  /**
   *
   * @returns {*|Promise.<T>}
   */
  fetchAll() {
    return this.fetch(
      endpoints.POSTS,
      this.buildConfig('GET')
    );
  }

  /**
   *
   * @param {number} id
   * @returns {Promise.<T>|*}
   */
  fetchById(id) {
    return this.fetch(
      `${endpoints.POSTS}/${id}`,
      this.buildConfig('GET')
    );
  }

  /**
   *
   * @param {number} id
   * @returns {Promise.<T>|*}
   */
  deleteById(id) {
    return this.fetch(
      `${endpoints.ADMIN_POSTS}/${id}`,
      this.buildConfig('DELETE')
    );
  }

  /**
   *
   * @returns {*|Promise.<T>}
   */
  submit(values, id = 0) {
    const endpoint = id === 0 ? endpoints.ADMIN_POSTS : `${endpoints.ADMIN_POSTS}/${id}`;
    const config   = this.buildConfig(id === 0 ? 'POST' : 'PUT', JSON.stringify(values));

    return this.fetch(endpoint, config);
  }

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

export default new Posts();
