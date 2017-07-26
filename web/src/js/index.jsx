import 'utils/fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FrontApp from 'front/App';
import AdminApp from 'admin/App';

const App = () => (
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
);

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
