'use strict';

import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-inner text-center">
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
            <ul className="footer-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
            </ul>
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