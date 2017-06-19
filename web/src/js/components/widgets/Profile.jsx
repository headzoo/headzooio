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
        <p className="details">
          Hi, I'm Sean. A pragmatic full stack web developer and U.S. Marine.
        </p>
        <p className="details">
          I have over a decade of experience as a full stack developer and software architect. I specialize
          in the design, building, and monitoring of high scale web applications with an emphasis on cloud
          technologies such as Amazon Web Services. From the backend to the front end, including site design,
          UX, and SEO.
        </p>
        
        <div className="social-links">
          <a className="twitter social-link" href="https://twitter.com/WebSeanHickey" title="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="facebook social-link" href="https://www.reddit.com/user/headzoo" title="Reddit">
            <i className="fa fa-reddit"></i>
          </a>
          <a className="linkedin social-link" href="https://www.linkedin.com/in/sean-hickey-8503bb142/" title="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      {/* Info End */}
    
    </div>
  </div>
);

export default ProfileWidget;