import React from 'react';

const Footer = () => (
  <footer id="footer" className="footer hide">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-powered text-center">
            <p>Powered by</p>
            <a href="https://symfony.com">
              <img src="http://headzoo.io/images/logo-symfony.png" alt="Symfony 3" />
            </a>
            <a href="https://facebook.github.io/react">
              <img src="http://headzoo.io/images/logo-react.png" alt="React" style={{ height: 57 }} />
            </a>
            <a href="https://api-platform.com">
              <img src="http://headzoo.io/images/logo-api-platform.png" alt="API Platform" />
            </a>
          </div>
          <div className="footer-inner text-center">
            <p className="footer-text">
              All original written text, images and video found on this website are Copyright © 2013-2017 Sean Hickey
              and are licensed under
              a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="active">Creative Commons
              Attribution-NonCommercial-ShareAlike 4.0 International License</a> except where explicitly stated
              otherwise.
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
