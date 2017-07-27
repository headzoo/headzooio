import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Auth from 'api/Auth';
import Icon from 'common/Icon';

export default class Header extends React.Component {
  static propTypes = {
    fluid: PropTypes.bool
  };

  static defaultProps = {
    fluid: false
  };

  constructor(props) {
    super(props);
    this.state = {
      authenticated: Auth.isAuthenticated()
    };
  }

  componentDidMount() {
    Auth.listen(this.handleAuthChange);
  }

  componentWillUnmount() {
    Auth.unlisten(this.handleAuthChange);
  }

  handleAuthChange = (authenticated) => {
    this.setState({ authenticated });
  };

  render() {
    const { fluid } = this.props;
    const { authenticated } = this.state;

    return (
      <header className="site-header">
        {/* Nav Start */}
        <nav className="navbar navbar-default navbar-intimate" data-offset-top="50">
          {/* Container Start */}
          <div className={fluid ? 'container-fluid' : 'container'}>
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
              <li className="hidden-xs">
                <a href="https://github.com/headzoo">
                  Github
                  <Icon name="external-link-square" />
                </a>
              </li>
              <li className="hidden-xs hidden-sm">
                <a href="https://www.npmjs.com/~web-headzoo">
                  NPM
                  <Icon name="external-link-square" />
                </a>
              </li>
              <li className="hidden-xs hidden-sm">
                <a href="https://packagist.org/users/headzoo">
                  Packagist
                  <Icon name="external-link-square" />
                </a>
              </li>
              <li className="hidden-xs">
                <a href="https://www.upwork.com/o/profiles/users/_~016cc95f90a9682e5d">
                  Upwork
                  <Icon name="external-link-square" />
                </a>
              </li>
              {!authenticated ? null : (
                <li>
                  <span className="separator" />
                  <Link to="/admin">
                    Admin
                    <Icon name="cog" />
                  </Link>
                  <Link to="/admin/write">
                    Write
                    <Icon name="pencil" />
                  </Link>
                  <Link to="/admin/logout">
                    Logout
                    <Icon name="sign-out" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* Container End */}
        </nav>
        {/* Nav End */}
      </header>
    );
  }
}
