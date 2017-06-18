'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Post from '../Post';

class PostPage extends React.PureComponent {
  static propTypes = {
    post: PropTypes.object
  };
  
  render() {
    const {post} = this.props;
    return (
      <Post key={post.id} post={post} readMore={false} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  const postID = ownProps.match.params.id;
  let post = {
    title:           '',
    content:         '',
    publicationDate: '',
    comments:        []
  };
  if (state.posts.posts.length > 0) {
    post = Object.assign({}, state.posts.posts.find(post => post.id == postID));
  }
  
  return {post};
}

export default connect(mapStateToProps)(PostPage);
