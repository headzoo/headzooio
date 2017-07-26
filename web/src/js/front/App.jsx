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
          <a href="https://github.com/headzoo/headzooio">
            <img
              alt="Fork me on GitHub"
              style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
              src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
              data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
            />
          </a>
        </div>
      </Provider>
    );
  }
}

