import 'utils/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import FrontApp from 'front/App';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={require('react-router-loader!./admin/App.jsx')} />
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
