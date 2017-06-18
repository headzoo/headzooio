'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class PostPage extends React.PureComponent {
  static propTypes = {
    post: PropTypes.object
  };
  
  render() {
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
      </div>
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
