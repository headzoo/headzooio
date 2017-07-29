import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'common/Icon';

const Loading = ({ className, ...props }) => (
  <Icon
    className={classNames('loading-spinner', className)}
    {...props}
    name="spinner"
    size="5x"
    spin
    pulse
  />
);

Loading.propTypes = {
  className: PropTypes.string
};

Loading.defaultProps = {
  className: ''
};

export default Loading;
