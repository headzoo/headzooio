import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Masthead = ({ isAuthenticated }) => (
  <div className="blog-masthead">
    <div className="container">
      <nav className="nav blog-nav">
        <Link className="nav-link active" to="/">Home</Link>
        <a className="nav-link" href="#">New features</a>
        <a className="nav-link" href="#">Press</a>
        <a className="nav-link" href="#">About</a>
        {isAuthenticated ?
          <Link className="nav-link" to="/logout">Logout</Link> :
          <Link className="nav-link" to="/login">Login</Link>
          }
      </nav>
    </div>
  </div>
  );

function mapStateToProps(state) {
  return Object.assign({}, state.auth);
}

export default connect(mapStateToProps)(Masthead);
