import 'utils/fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import FrontApp from 'front/App';
import AdminApp from 'admin/App';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminApp />
        </Route>
        <Route path="/">
          <FrontApp />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
