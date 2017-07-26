import * as endpoints from 'api/endpoints';

const TOKEN_KEY     = 'token';
const REFRESH_KEY   = 'refresh_token';
const RE_LOGIN_SECS = 120;

class Auth {
  constructor() {
    this.creds    = null;
    this.interval = null;
    this.refresh();
  }

  /**
   *
   * @returns {boolean}
   */
  isAuthenticated() {
    return localStorage.getItem(TOKEN_KEY) !== null;
  }

  /**
   * @returns {string|null}
   */
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  /**
   * @returns {string|null}
   */
  getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
  }

  /**
   *
   * @returns {*}
   */
  refresh() {
    if (this.creds !== null) {
      return this.login(this.creds);
    }

    const token = this.getRefreshToken();
    if (token) {
      const config = {
        method:  'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `refresh_token=${token}`
      };

      return fetch(endpoints.REFRESH_TOKEN, config)
        .then(resp => resp.json())
        .then((resp) => {
          if (!resp.token || !resp.refresh_token) {
            this.logout();
            return Promise.reject(resp.message);
          }

          localStorage.setItem(TOKEN_KEY, resp.token);
          localStorage.setItem(REFRESH_KEY, resp.refresh_token);
          this.startInterval();

          return resp;
        })
        .catch((error) => {
          this.logout();
          throw error;
        });
    }

    return null;
  }

  /**
   *
   * @param {{username: string, password: string}} creds
   * @returns {*|Promise.<T>}
   */
  login(creds) {
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
        if (!resp.token || !resp.refresh_token) {
          this.logout();
          return Promise.reject(resp.message);
        }

        this.creds = creds;
        localStorage.setItem(TOKEN_KEY, resp.token);
        localStorage.setItem(REFRESH_KEY, resp.refresh_token);
        this.startInterval();

        return resp;
      })
      .catch((error) => {
        this.logout();
        throw error;
      });
  }

  /**
   *
   * @returns {boolean}
   */
  logout() {
    this.creds = null;
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    this.stopInterval();

    return true;
  }

  startInterval() {
    this.stopInterval();
    this.interval = setInterval(this.refresh.bind(this), RE_LOGIN_SECS * 1000);
  }

  stopInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

export default new Auth();
