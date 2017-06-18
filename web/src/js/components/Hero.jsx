'use strict';

import React from 'react';

const Hero = () => (
  <section className="text-center" id="hero-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="intro-area">
            <h2 className="page-title">
              Personal Blog and Portfolio Template
            </h2>
            
            <div className="entry-meta">
              <span className="meta-part">
                <i className="ico-user"></i>
                <a href="#">James Maclern</a>
              </span>
              <span className="meta-part">
                <i className="ico-calendar-alt-fill"></i>
                <a href="#">January 7, 2015</a>
              </span>
              <span className="meta-part">
                <i className="ico-comments"></i>
                <a href="#">20</a>
              </span>
              <span className="meta-part">
                <i className="ico-tag"></i>
                <a href="#">Tech</a>
              </span>
              <span className="meta-part">
                <i className="ico-star"></i>
                <a href="#">7.5</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;