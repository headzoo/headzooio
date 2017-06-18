'use strict';

import React from 'react';

const ProfileWidget = () => (
  <div className="entry-widget">
    <div className="widget-profile">
      
      <div className="image">
        <img alt="" src="/build/template/img/blog/cover.jpg"/>
      </div>
      <div className="portfolio">
        <img alt="" src="/images/portfolio.jpg"/>
      </div>
      
      {/* Info Start */}
      <div className="info">
        <h3 className="name">
          Sean Hickey
        </h3>
        <p className="details">
          Hi, I'm Sean. A funkadelic coding monk, pragmatic full stack web developer, and U.S. Marine.
        </p>
        <p className="details">
          I have over a decade of experience as a full stack developer and software architect. I specialize
          in the design, building, and monitoring of high scale web applications with an emphasis on cloud
          technologies such as Amazon Web Services. From the backend to the front end, including site design,
          UX, and SEO.
        </p>
        
        <div className="social-links">
          <a className="twitter social-link" data-placement="top" data-toggle="tooltip" href="#" title="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="facebook social-link" data-placement="top" data-toggle="tooltip" href="#" title="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a className="google-plus social-link" data-placement="top" data-toggle="tooltip" href="#" title="Google+">
            <i className="fa fa-google-plus"></i>
          </a>
          <a className="linkedin social-link" data-placement="top" data-toggle="tooltip" href="#" title="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
          <a className="dribbble social-link" data-placement="top" data-toggle="tooltip" href="#" title="Dribbble">
            <i className="fa fa-dribbble"></i>
          </a>
          <a className="pinterest social-link" data-placement="top" data-toggle="tooltip" href="#" title="Pinterest">
            <i className="fa fa-pinterest"></i>
          </a>
        </div>
      </div>
      {/* Info End */}
    
    </div>
  </div>
);

export default ProfileWidget;