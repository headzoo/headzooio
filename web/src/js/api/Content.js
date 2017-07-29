import * as endpoints from 'api/endpoints';
import Platform from 'api/Platform';

class Content extends Platform {
  /**
   *
   * @returns {*|Promise.<T>}
   */
  fetchAll() {
    return this.fetch(
      endpoints.CONTENT,
      this.buildConfig('GET')
    );
  }

  /**
   *
   * @param {String} name
   * @returns {Promise.<T>|*}
   */
  fetchByName(name) {
    return this.fetch(
      `${endpoints.CONTENT}?name=${name}`,
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
      `${endpoints.CONTENT}/${id}`,
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
      `${endpoints.ADMIN_CONTENT}/${id}`,
      this.buildConfig('DELETE')
    );
  }

  /**
   *
   * @returns {*|Promise.<T>}
   */
  submit(values, id = 0) {
    const endpoint = id === 0 ? endpoints.ADMIN_CONTENT : `${endpoints.ADMIN_CONTENT}/${id}`;
    const config   = this.buildConfig(id === 0 ? 'POST' : 'PUT', JSON.stringify(values));

    return this.fetch(endpoint, config);
  }
}

export default new Content();
