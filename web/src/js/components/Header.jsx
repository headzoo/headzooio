'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <header className="site-header">
    
    {/* Nav Start */}
    <nav className="navbar navbar-default navbar-intimate" data-offset-top="50">
      {/* Container Start */}
      <div className="container">
      
        <div className="navbar-header">
          <button className="navbar-toggle" data-target="#navigation" data-toggle="collapse" type="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        
        <div className="navbar-collapse collapse" id="navigation">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown dropdown-toggle active">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="dropdown dropdown-toggle">
              <a href="https://github.com/headzoo">
                Github
              </a>
            </li>
            <li className="dropdown dropdown-toggle">
              <a href="https://www.npmjs.com/~web-headzoo">
                NPM
              </a>
            </li>
            <li className="dropdown dropdown-toggle">
              <a href="https://packagist.org/users/headzoo">
                Packagist
              </a>
            </li>
            <li className="dropdown dropdown-toggle">
              <a href="https://www.upwork.com/o/profiles/users/_~016cc95f90a9682e5d">
                Upwork
              </a>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
      {/* Container End */}
    </nav>
    {/* Nav End */}
  
    {/* Mobile Menu Start */}
    <ul className="wpb-mobile-menu">
      <li>
        <a href="index.html">Home</a>
        <ul>
          <li>
            <a href="fullscreen-slider.html">
              Home - Fullscreen Slider
            </a>
          </li>
          <li>
            <a href="carousel-slider.html">
              Home - Post Carousel
            </a>
          </li>
          <li>
            <a href="index.html">
              Home - Default
            </a>
          </li>
        </ul>
      </li>
      
      <li>
        <a href="#">Portfolio</a>
        <ul>
          <li>
            <a href="portfolio-col-3.html">
              Portfolio 3 column
            </a>
          </li>
          <li>
            <a href="portfolio-col-4.html">
              Portfolio 4 column
            </a>
          </li>
          <li>
            <a href="portfolio-item.html">
              Single Project
            </a>
          </li>
        </ul>
      </li>
      
      <li className="active">
        <a href="#">Blog</a>
        <ul>
          <li>
            <a href="blog.html">
              Blog View
            </a>
          </li>
          <li className="active">
            <a href="single.html">
              Single Post
            </a>
          </li>
        </ul>
      </li>
      
      <li>
        <a href="contact.html">Contact</a>
      </li>
      
      <li>
        <a href="#">Download</a>
      </li>
    </ul>
    {/* Mobile Menu End */}
    
  </header>
);

export default Header;
