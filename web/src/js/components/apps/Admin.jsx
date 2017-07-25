import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import AdminWrite from 'components/pages/admin/Write';
import AdminEdit from 'components/pages/admin/Edit';

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
              <Route path="/admin/edit/:id" component={AdminEdit} />
              <Route path="/admin/delete/:id" component={AdminEdit} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AdminApp;
