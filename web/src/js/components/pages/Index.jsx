'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {postsLoad} from '../../actions/postActions';
import Post from '../Post';

class IndexPage extends React.PureComponent {
  static propTypes = {
    dispatch:   PropTypes.func.isRequired,
    posts:      PropTypes.array,
    isFetching: PropTypes.bool
  };
  
  render() {
    const { posts } = this.props;
    
    return (
      <div>
        <div>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
  
        <nav className="blog-pagination">
          <a className="btn btn-outline-primary" href="#">Older</a>
          <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.posts);
}

export default connect(mapStateToProps)(IndexPage);
