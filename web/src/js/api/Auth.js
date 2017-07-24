import * as endpoints from 'api/endpoints';

const TOKEN_KEY = 'token';

class Auth {
  /**
   *
   * @returns {boolean}
   */
  static isAuthenticated() {
    return localStorage.getItem(TOKEN_KEY) !== null;
  }

  /**
   *
   * @param {{username: string, password: string}} creds
   * @returns {*|Promise.<T>}
   */
  static login(creds) {
    const config = {
      method:  'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `username=${creds.username}&password=${creds.password}`
    };

    return fetch(endpoints.LOGIN, config)
      .then(resp => resp.json())
      .then((resp) => {
        if (!resp.token) {
          return Promise.reject(resp.message);
        }
        localStorage.setItem(TOKEN_KEY, resp.token);
        return resp;
      })
      .catch((error) => {
        throw error;
      });
  }

  /**
   *
   * @returns {boolean}
   */
  static logout() {
    localStorage.removeItem(TOKEN_KEY);
    return true;
  }
}

export default Auth;
