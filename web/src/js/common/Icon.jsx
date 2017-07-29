import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Renders an icon.
 *
 * Example:
 * ```jsx
 *  import React from 'react';
 *  import { render } from 'react-dom';
 *  import Icon from 'Components/Icon';
 *
 *  render(
 *    <div>
 *      <Icon name="bug" size="m" aria-hidden={true} />
 *      <Icon name="cog" spin={true} />
 *      <Icon name="caret-down" rotate={90} />
 *    </div>
 *    , document.getElementById('mount')
 *  );
 * ```
 */
const Icon = ({ className, name, size, pulse, fixedWidth, rotate, spin, ...elementProps }) => (
  <i
    className={classNames(
      `icon fa fa-${name} fa-${size}`,
      {
        'fa-spin':               spin,
        'fa-pulse':              pulse,
        'fa-fw':                 fixedWidth,
        [`fa-${size}`]:          size !== '',
        [`fa-rotate-${rotate}`]: (rotate !== '0')
      },
      className
    )}
    {...elementProps}
  />
);
export default Icon;

Icon.propTypes = {
  /**
   * CSS classes to apply to the element.
   */
  className:  PropTypes.string,
  /**
   * Name of the icon to use.
   */
  name:       PropTypes.string.isRequired,
  /**
   * Displays the icon at the given size
   */
  size:       PropTypes.oneOf(['', 'lg', '2x', '3x', '4x', '5x']),
  /**
   * Rotates the icon.
   */
  rotate:     PropTypes.oneOf(['0', '90', '180', '270']),
  /**
   * Spins the icon using CSS animation.
   */
  spin:       PropTypes.bool,
  /**
   * Causes the icon to pulse.
   */
  pulse:      PropTypes.bool,
  /**
   * Render a fixed width icon.
   */
  fixedWidth: PropTypes.bool
};

Icon.defaultProps = {
  size:       '',
  rotate:     '0',
  spin:       false,
  pulse:      false,
  fixedWidth: false,
  className:  ''
};
