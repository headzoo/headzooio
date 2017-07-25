import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

import IndexPage from 'components/pages/Index';
import PostPage from 'components/pages/Post';
import ContactPage from 'components/pages/Contact';
import LoginPage from 'components/pages/Login';
import LogoutPage from 'components/pages/Logout';

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

export default FrontApp;
