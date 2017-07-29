import * as endpoints from 'api/endpoints';
import Platform from 'api/Platform';

class Content extends Platform {

  /**
   *
   * @param {String} name
   * @returns {Promise.<T>|*}
   */
  fetchByName(name) {
    return this.fetchCached(
      `${endpoints.CONTENT}?name=${name}`,
      this.buildConfig('GET'),
      `content_name_${name}`
    );
  }

  /**
   *
   * @param {number} id
   * @returns {Promise.<T>|*}
   */
  fetchById(id) {
    return this.fetchCached(
      `${endpoints.CONTENT}/${id}`,
      this.buildConfig('GET'),
      `content_id_${id}`
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
