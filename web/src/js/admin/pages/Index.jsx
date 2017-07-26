import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postsLoad } from 'actions/postActions';

class IndexPage extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array
  };

  constructor(props) {
    super(props);
    props.dispatch(postsLoad());
  }

  componentDidMount() {
    document.title = 'Admin - headzoo.io';
  }

  render() {
    const { posts } = this.props;

    return (
      <article>
        <h3>Recent Posts</h3>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/admin/edit/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.posts);
}

export default connect(mapStateToProps)(IndexPage);
