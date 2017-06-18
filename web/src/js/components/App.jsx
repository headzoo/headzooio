'use strict';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Masthead from './Masthead';
import Footer from './Footer';
import Sidebar from './Sidebar';
import IndexPage from './pages/Index';
import PostPage from './pages/Post';

const App = () => (
  <div>
    <Masthead />
    <div className="container">
      <div className="row">
        <div className="col-sm-8 blog-main">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/posts/:id" component={PostPage} />
          </Switch>
        </div>
        <div className="col-sm-3 offset-sm-1 blog-sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
