import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FrontApp from 'components/apps/Front';
import AdminApp from 'components/apps/Admin';

const App = () => (
  <Switch>
    <Route path='/admin'>
      <AdminApp />
    </Route>
    <Route path='/'>
      <FrontApp />
    </Route>
  </Switch>
);

export default App;
