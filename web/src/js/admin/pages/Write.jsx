import React from 'react';
import { connect } from 'react-redux';
import { writeChange, writeSubmit, writeReset } from 'admin/actions/writeActions';
import PostForm from 'admin/components/PostForm';

class AdminWrite extends React.Component {
  componentDidMount() {
    document.title = 'Write Post - headzoo.io';
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.dispatch(writeReset());
  }

  handleChange = (name, value) => {
    this.props.dispatch(writeChange(name, value));
  };

  handleSubmit = () => {
    this.props.dispatch(writeSubmit());
  };

  render() {
    const { title, content, imageURL, errorMessage, isSubmitting } = this.props;

    return (
      <article>
        <PostForm
          title={title}
          content={content}
          imageURL={imageURL}
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

export default connect(mapStateToProps)(AdminWrite);
