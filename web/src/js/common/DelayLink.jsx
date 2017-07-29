import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';

export default class DelayLink extends React.Component {
  static propTypes = {
    delay: PropTypes.number
  };

  static defaultProps = {
    delay: 0
  };

  static contextTypes = ReactRouterLink.contextTypes;

  handleClick = (e) => {
    e.preventDefault();

    setTimeout(() => {
      const { history } = this.context.router;
      const { replace, to } = this.props;
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }, this.props.delay);
  };

  render() {
    return (
      <ReactRouterLink {...this.props} onClick={this.handleClick} />
    );
  }
}
