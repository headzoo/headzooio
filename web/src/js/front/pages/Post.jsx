import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Disqus from 'react-disqus-thread';
import { postLoad } from 'actions/postActions';
import Post from 'front/components/Post';
import Loading from 'common/Loading';
import NoMatch from 'front/pages/NoMatch';

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
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    document.title = `${this.props.post.title} - headzoo.io`;
  }

  render() {
    const { post } = this.props;

    if (post.errorMessage !== '') {
      return <NoMatch />;
    }
    if (post.isFetching || post.id === 0) {
      return (
        <article>
          <Loading />
        </article>
      );
    }

    return (
      <div>
        <Post key={post.id} post={post} readMore={false} />
        <article>
          <Disqus
            shortname="headzoo-io"
            title={post.title}
            identifier={`posts_${post.id}`}
          />
        </article>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return Object.assign({}, { post: state.post });
}

export default withRouter(connect(mapStateToProps)(PostPage))
