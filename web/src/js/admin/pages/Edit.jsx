import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { writeLoad, writeChange, writeSubmit, writeReset } from 'actions/writeActions';
import PostForm from 'admin/components/PostForm';

class AdminEdit extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.id = parseInt(this.props.match.params.id, 10);
    props.dispatch(writeLoad(this.id, true));
  }

  componentDidMount() {
    document.title = 'Edit Post - headzoo.io';
    window.scrollTo(0, 0);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isSubmitted && !this.props.isSubmitted) {
      this.context.router.history.push(`/posts/${this.id}`);
    }
  }

  componentWillUnmount() {
    this.props.dispatch(writeReset());
  }

  handleChange = (name, value) => {
    this.props.dispatch(writeChange(name, value));
  };

  handleSubmit = () => {
    this.props.dispatch(writeSubmit(this.id));
  };

  render() {
    const { title, content, imageURL, published, errorMessage, isSubmitting } = this.props;

    return (
      <article>
        <PostForm
          title={title}
          content={content}
          imageURL={imageURL}
          published={published}
          errorMessage={errorMessage}
          isSubmitting={isSubmitting}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </article>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.write);
}

export default connect(mapStateToProps)(AdminEdit);
