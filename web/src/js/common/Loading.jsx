import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'common/Icon';

const Loading = ({ size, className, ...props }) => (
  <Icon
    className={classNames('loading-spinner', className)}
    {...props}
    name="spinner"
    size={size}
    spin
    pulse
  />
);

Loading.propTypes = {
  size:      PropTypes.string,
  className: PropTypes.string
};

Loading.defaultProps = {
  size:      '5x',
  className: ''
};

export default Loading;
