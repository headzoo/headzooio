'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

const Masthead = () => (
  <div className="blog-masthead">
    <div className="container">
      <nav className="nav blog-nav">
        <Link className="nav-link active" to="/">Home</Link>
        <a className="nav-link" href="#">New features</a>
        <a className="nav-link" href="#">Press</a>
        <a className="nav-link" href="#">About</a>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/logout">Logout</Link>
      </nav>
    </div>
  </div>
);

export default Masthead;
