import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postsLoad } from 'actions/postActions';
import Post from 'front/components/Post';

class IndexPage extends React.Component {
  static propTypes = {
    posts: PropTypes.array
  };

  constructor(props) {
    super(props);
    props.dispatch(postsLoad());
  }

  componentDidMount() {
    document.title = 'headzoo.io';
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <div>
          {posts.map(post => (
            <Post key={post.id} post={post} readMore={false} />
          ))}
        </div>
        {/*
        <nav className="blog-pagination">
          <a className="btn btn-outline-primary" href="#">Older</a>
          <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
        </nav>
        */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.posts);
}

export default connect(mapStateToProps)(IndexPage);
