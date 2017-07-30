import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';
import Icon from 'common/Icon';

export default class TweetShare extends React.Component {
  static propTypes = {
    /**
     * URL to tweet.
     */
    url:       PropTypes.string.isRequired,
    /**
     * The text of the tweet.
     */
    text:      PropTypes.string,
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
    text:      '',
    className: '',
    children:  ''
  };

  handleClick = () => {
    const url  = encodeURIComponent(this.props.url);
    const text = encodeURIComponent(this.props.text);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      'tweet_share',
      'width=460,height=260'
    );
  };

  render() {
    const { className, ...props } = this.props;

    return (
      <button
        onClick={this.handleClick}
        className={classNames('tweet-btn', className)}
        {...objectKeyFilter(props, TweetShare.propTypes)}
      >
        <Icon name="twitter" /> Tweet
      </button>
    );
  }
}
