import * as endpoints from 'api/endpoints';
import Platform from 'api/Platform';

class Posts extends Platform {
  /**
   *
   * @returns {*|Promise.<T>}
   */
  fetchAll() {
    return this.fetchCached(
      endpoints.POSTS,
      this.buildConfig('GET'),
      'posts_all_page_1'
    );
  }

  /**
   *
   * @param {number} id
   * @returns {Promise.<T>|*}
   */
  fetchById(id) {
    return this.fetchCached(
      `${endpoints.POSTS}/${id}`,
      this.buildConfig('GET'),
      `post_${id}`
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
}

export default new Posts();
