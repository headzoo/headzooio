'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Sidebar from './Sidebar';
import IndexPage from './pages/Index';
import PostPage from './pages/Post';
import ContactPage from './pages/Contact';
import LoginPage from './pages/Login';
import LogoutPage from './pages/Logout';

const App = () => {
  return (
    <div>
      <Header />
      <div className="single-post" id="content">
        <div className="container">
          <Hero />
          <div className="row">
            <div className="col-md-8">
              <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/posts/:id" component={PostPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/logout" component={LogoutPage}/>
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
};

export default App;
