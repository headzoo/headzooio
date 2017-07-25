import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { postsLoad } from 'front/actions/postActions';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'front/store/store';

import Header from 'front/components/Header';
import Hero from 'front/components/Hero';
import Footer from 'front/components/Footer';
import Sidebar from 'front/components/Sidebar';

import IndexPage from 'front/pages/Index';
import AboutPage from 'front/pages/About';
import ContactPage from 'front/pages/Contact';
import LoginPage from 'front/pages/Login';
import LogoutPage from 'front/pages/Logout';
import PostPage from 'front/pages/Post';

export default class App extends React.Component {
  componentDidMount() {
    store.dispatch(postsLoad());
  }

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
                  <div className="col-md-8">
                    <Switch>
                      <Route exact path="/" component={IndexPage} />
                      <Route exact path="/about" component={AboutPage} />
                      <Route exact path="/contact" component={ContactPage} />
                      <Route exact path="/posts/:id" component={PostPage} />
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
        </BrowserRouter>
      </Provider>
    );
  }
}

