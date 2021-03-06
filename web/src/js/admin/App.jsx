import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'front/components/Header';
import Footer from 'front/components/Footer';
import IndexPage from 'admin/pages/Index';
import LoginPage from 'admin/pages/Login';
import LogoutPage from 'admin/pages/Logout';
import AdminWrite from 'admin/pages/Write.jsx';
import AdminEdit from 'admin/pages/Edit.jsx';
import WriteDelete from 'admin/pages/Delete';

const App = () => (
  <div>
    <Header fluid />
    <div className="single-post" id="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/admin/login" component={LoginPage} />
              <Route exact path="/admin/logout" component={LogoutPage} />
              <Route exact path="/admin/write" component={AdminWrite} />
              <Route exact path="/admin/edit/:id" component={AdminEdit} />
              <Route exact path="/admin/delete/:id" component={WriteDelete} />
              <Route exact path="/admin" component={IndexPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
