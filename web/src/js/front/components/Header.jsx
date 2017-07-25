import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'common/Icon';

const Header = () => (
  <header className="site-header">

    {/* Nav Start */}
    <nav className="navbar navbar-default navbar-intimate" data-offset-top="50">
      {/* Container Start */}
      <div className="container">

        <div className="navbar-header">
          <button className="navbar-toggle" data-target="#navigation" data-toggle="collapse" type="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>

        <div className="navbar-collapse collapse" id="navigation">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
                <Icon name="home" />
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName="active">
                About
                <Icon name="info-circle" />
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="active">
                Contact
                <Icon name="envelope" />
              </NavLink>
            </li>
            <li>
              <a href="https://github.com/headzoo">
                Github
                <Icon name="external-link-square" />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/~web-headzoo">
                NPM
                <Icon name="external-link-square" />
              </a>
            </li>
            <li>
              <a href="https://packagist.org/users/headzoo">
                Packagist
                <Icon name="external-link-square" />
              </a>
            </li>
            <li>
              <a href="https://www.upwork.com/o/profiles/users/_~016cc95f90a9682e5d">
                Upwork
                <Icon name="external-link-square" />
              </a>
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