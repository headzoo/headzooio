import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontApp from 'components/apps/Front';
import AdminApp from 'components/apps/Admin';
import PostPage from 'components/pages/Post';

const App = () => (
  <Switch>
    <Route path="/admin">
      <AdminApp />
    </Route>
    <Route exact path="/posts/:id" component={PostPage} />
    <Route path="/">
      <FrontApp />
    </Route>
  </Switch>
);

export default App;
