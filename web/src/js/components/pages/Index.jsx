'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as postActions from '../../actions/postActions';

class IndexPage extends React.Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <div key={post.id} className="blog-post">
            <h2 className="blog-post-title">
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p className="blog-post-meta">{post.publicationDate}</p>
            <p>{post.content}</p>
          </div>
        ))}
  
        <nav className="blog-pagination">
          <a className="btn btn-outline-primary" href="#">Older</a>
          <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(IndexPage);
