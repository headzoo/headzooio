import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import FrontApp from 'components/apps/Front';
import AdminApp from 'components/apps/Admin';
import PostPage from 'components/pages/Post';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
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
  }
}

export default withRouter(App);
