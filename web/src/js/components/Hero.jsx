'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

const Hero = () => (
  <section className="text-center hero" id="hero-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="intro-area">
            <h2 className="page-title">
              <Link to="/">headzoo.io</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;