import * as endpoints from 'api/endpoints';
import Auth from 'api/Auth';

class Uploads {

  upload(file) {
    const data = new FormData();
    data.append('file', file);
    const config = {
      method:  'POST',
      body:    data,
      headers: {
        Accept: 'application/json'
      }
    };
    if (Auth.isAuthenticated()) {
      config.headers.Authorization = `Bearer ${Auth.getToken()}`;
    }

    return fetch(endpoints.UPLOAD, config)
      .then(resp => resp.json())
      .catch(error => error);
  }
}

export default new Uploads();
