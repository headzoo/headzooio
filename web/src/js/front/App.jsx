import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteTransition, presets } from 'react-router-transition';

import Header from 'front/components/Header';
import Hero from 'front/components/Hero';
import Footer from 'front/components/Footer';
import Sidebar from 'front/components/Sidebar';
import IndexPage from 'front/pages/Index';
import AboutPage from 'front/pages/About';
import ContactPage from 'front/pages/Contact';
import PostPage from 'front/pages/Post';
import NoMatchPage from 'front/pages/NoMatch';

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
              <Route component={NoMatchPage} />
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
        <div className="row">
          <div className="col-md-12">
            <Route render={({ location }) => (
              <RouteTransition
                pathname={location.pathname}
                {...presets.pop}
              >
                <Switch>
                  <Route exact path="/posts/:id" component={PostPage} />
                </Switch>
              </RouteTransition>
            )}
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

const App = () => (
  <div>
    <Switch>
      <Route path="/posts">
        <PostApp />
      </Route>
      <Route path="/">
        <FrontApp />
      </Route>
    </Switch>
    <a href="https://github.com/headzoo/headzooio" className="hidden-xs hidden-sm">
      <img
        alt="Fork me on GitHub"
        style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
        src="/images/github-fork.png"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
      />
    </a>
  </div>
);

export default App;
