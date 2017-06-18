'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class PostPage extends React.PureComponent {
  static propTypes = {
    post: PropTypes.object
  };
  
  render() {
    const {post} = this.props;
    
    return (
      <article className="single-post-content">
        <div className="blog-item-wrap">
          <a href="#">
            <img alt="" src="/build/template/img/blog/blog-01.jpg" />
          </a>
        </div>
        <br />
        <blockquote className="capton">
          <p>
            Twitter is asking its users to tell brands
            exactly what they think of their ads with the
            launch of its new conversational advertising
            format.
          </p>
        </blockquote>
        <p>
          {post.content}
        </p>
      </article>
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
