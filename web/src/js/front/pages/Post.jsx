import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from 'front/components/Post';

class PostPage extends React.PureComponent {
  static propTypes = {
    post: PropTypes.object
  };

  componentDidMount() {
    document.title = `${this.props.post.title} - headzoo.io`;
  }

  render() {
    const { post } = this.props;

    return (
      <Post key={post.id} post={post} readMore={false} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const postID = parseInt(ownProps.match.params.id, 10);
  let post = {
    title:           '',
    content:         '',
    publicationDate: '',
    comments:        []
  };
  if (state.posts.posts.length > 0) {
    post = Object.assign({}, state.posts.posts.find(p => p.id === postID));
  }

  return { post };
}

export default connect(mapStateToProps)(PostPage);
