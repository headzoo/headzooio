import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-inner text-center">
            <div className="cc-image">
              <img src="/images/cc.jpg" />
            </div>
            <p className="footer-text">
              All original written text, images and video found on this website are Copyright © 2013-2017 Sean Hickey
              and are licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="active">Creative Commons
              Attribution-NonCommercial-ShareAlike 4.0 International License</a> except where explicitly stated otherwise.
            </p>
            <div className="copyright">
              <p>
                Copyright © 2017 Sean Hickey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;