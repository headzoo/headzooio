import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DelayLink from 'common/DelayLink';
import Icon from 'common/Icon';

const ContinueLink = ({ to, className, ...props }) => (
  <DelayLink to={to} className={classNames('btn btn-common btn-more', className)} {...props}>
    Continue <Icon name="arrow-right" />
  </DelayLink>
);

ContinueLink.propTypes = {
  to:        PropTypes.string.isRequired,
  className: PropTypes.string
};

ContinueLink.defaultProps = {
  className: ''
};

export default ContinueLink;
