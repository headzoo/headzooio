import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-inner text-center">
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
    <a href="https://github.com/headzoo/headzooio">
      <img
        alt="Fork me on GitHub"
        style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
        src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
      />
    </a>
  </footer>
);

export default Footer;
