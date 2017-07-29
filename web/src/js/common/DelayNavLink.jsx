import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import DelayLink from 'common/DelayLink';
import Icon from 'common/Icon';

export default class DelayNavLink extends React.Component {
  static propTypes = {
    to:              Link.propTypes.to,
    exact:           PropTypes.bool,
    strict:          PropTypes.bool,
    location:        PropTypes.object,
    icon:            PropTypes.string,
    activeClassName: PropTypes.string,
    className:       PropTypes.string,
    activeStyle:     PropTypes.object,
    style:           PropTypes.object,
    isActive:        PropTypes.func,
    ariaCurrent:     PropTypes.oneOf(['page', 'step', 'location', 'true'])
  };

  static defaultProps = {
    activeClassName: 'active',
    ariaCurrent:     'true',
    icon:            ''
  };

  constructor(props) {
    super(props);
    this.origIcon = props.icon;
    this.state = {
      icon: props.icon,
      spin: false
    };
  }

  handleDelayStart = () => {
    if (this.origIcon !== '') {
      this.setState({
        icon: 'spinner',
        spin: true
      });
    }
  };

  handleDelayEnd = () => {
    if (this.origIcon !== '') {
      this.setState({
        icon: this.origIcon,
        spin: false
      });
    }
  };

  render() {
    const {
      to,
      exact,
      strict,
      location,
      activeClassName,
      className,
      activeStyle,
      style,
      children,
      isActive: getIsActive,
      ariaCurrent,
      ...rest
    } = this.props;
    const { icon, spin } = this.state;

    return (
      <Route
        path={typeof to === 'object' ? to.pathname : to}
        exact={exact}
        strict={strict}
        location={location}
        children={({ location, match }) => { // eslint-disable-line
          const isActive = !!(getIsActive ? getIsActive(match, location) : match);

          return (
            <DelayLink
              to={to}
              onDelayStart={this.handleDelayStart}
              onDelayEnd={this.handleDelayEnd}
              className={isActive ? [className, activeClassName].filter(i => i).join(' ') : className}
              style={isActive ? { ...style, ...activeStyle } : style}
              aria-current={isActive && ariaCurrent}
              {...rest}
            >
              {children}
              {!icon ? null : (
                <Icon name={icon} spin={spin} pulse={spin} fixedWidth />
              )}
            </DelayLink>
          );
        }}
      />
    );
  }
}
