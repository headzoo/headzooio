import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as actions from 'front/actions/postActions';
import store from 'front/store/store';

import Header from 'front/components/Header';
import Hero from 'front/components/Hero';
import Footer from 'front/components/Footer';
import Sidebar from 'front/components/Sidebar';
import IndexPage from 'front/pages/Index';
import AboutPage from 'front/pages/About';
import ContactPage from 'front/pages/Contact';
import PostPage from 'front/pages/Post';
import LoginPage from 'front/pages/Login';
import LogoutPage from 'front/pages/Logout';

const FrontApp = () => (
  <div>
    <Header />
    <div className="single-post" id="content">
      <div className="container">
        <Hero />
        <div className="row">
          <div className="col-md-8">
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/logout" component={LogoutPage} />
            </Switch>
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

const PostApp = () => (
  <div>
    <Header />
    <div className="single-post" id="content">
      <div className="container">
        <Hero />
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/posts/:id" component={PostPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    store.dispatch(actions.postsLoad());
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Switch>
            <Route path="/posts">
              <PostApp />
            </Route>
            <Route path="/">
              <FrontApp />
            </Route>
          </Switch>
        </div>
      </Provider>
    );
  }
}

