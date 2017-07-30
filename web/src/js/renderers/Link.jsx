import React from 'react';
import PropTypes from 'prop-types';
import { objectKeyFilter } from 'utils/objects';
import Gist from 'common/Gist';

export default class Link extends React.Component {
  static propTypes = {
    /**
     * URL for the link.
     */
    href:      PropTypes.string.isRequired,
    /**
     * Title for the link.
     */
    title:     PropTypes.string,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Children to render.
     */
    children:  PropTypes.node
  };

  static defaultProps = {
    title:     '',
    className: '',
    children:  ''
  };

  render() {
    const { href, title, children, ...props } = this.props;

    if (href.indexOf('https://gist.github.com') === 0) {
      return <Gist id={href.split('/')[4].replace('.js', '')} {...props} />;
    }

    return (
      <a
        href={href}
        title={title}
        {...objectKeyFilter(props, Link.propTypes)}
      >
        {children}
      </a>
    );
  }
}
