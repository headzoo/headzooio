import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'admin/store/store';

import Header from 'front/components/Header';
import Hero from 'front/components/Hero';
import Footer from 'front/components/Footer';
import AdminWrite from 'admin/pages/Write';
import AdminEdit from 'admin/pages/Edit';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Provider>
    );
  }
}
