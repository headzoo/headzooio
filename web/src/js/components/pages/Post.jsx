import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { scrollToTop } from 'utils/animation';
import Post from 'components/Post';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Footer from 'components/Footer';

class PostPage extends React.PureComponent {
  static propTypes = {
    post: PropTypes.object
  };

  componentDidMount() {
    scrollToTop(250);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <Header />
        <div className="single-post" id="content">
          <div className="container">
            <Hero />
            <div className="row">
              <div className="col-md-12">
                <Post key={post.id} post={post} readMore={false} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
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
