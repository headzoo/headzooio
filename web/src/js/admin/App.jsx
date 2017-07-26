import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'admin/store/store';

import Header from 'front/components/Header';
import Footer from 'front/components/Footer';
import AdminWrite from 'admin/pages/Write';
import AdminEdit from 'admin/pages/Edit';
import WriteDelete from 'admin/pages/Delete';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <div className="single-post" id="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route path="/admin/write" component={AdminWrite} />
                <Route path="/admin/edit/:id" component={AdminEdit} />
                <Route path="/admin/delete/:id" component={WriteDelete} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </Provider>
);

export default App;
