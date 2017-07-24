import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Hero from '../Hero';
import Footer from '../Footer';
import AdminWrite from '../pages/admin/Write';

const AdminApp = () => (
  <div>
    <Header />
    <div className="single-post" id="content">
      <div className="container">
        <Hero />
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route path="/admin/write" component={AdminWrite} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AdminApp;
