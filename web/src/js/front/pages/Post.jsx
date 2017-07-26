import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postLoad } from 'actions/postActions';
import Post from 'front/components/Post';

class PostPage extends React.Component {
  static propTypes = {
    post: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.id = parseInt(props.match.params.id, 10);
    props.dispatch(postLoad(this.id));
  }

  componentDidMount() {
    document.title = `${this.props.post.title} - headzoo.io`;
    window.scrollTo(0, 0);
  }

  render() {
    const { post } = this.props;
    if (!post.title) {
      return null;
    }

    return (
      <Post key={post.id} post={post} readMore={false} />
    );
  }
}


function mapStateToProps(state) {
  return Object.assign({}, { post: state.post });
}

export default withRouter(connect(mapStateToProps)(PostPage));
