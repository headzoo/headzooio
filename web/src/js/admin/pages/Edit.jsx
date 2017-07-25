import React from 'react';
import { connect } from 'react-redux';
import { writeLoad, writeChange, writeSubmit } from 'admin/actions/writeActions';
import PostForm from 'admin/components/PostForm';

class AdminEdit extends React.Component {
  constructor(props) {
    super(props);
    this.id = parseInt(this.props.match.params.id, 10);
    props.dispatch(writeLoad(this.id));
  }

  componentDidMount() {
    document.title = 'Edit Post - headzoo.io';
    window.scrollTo(0, 0);
  }

  handleChange = (name, value) => {
    this.props.dispatch(writeChange(name, value));
  };

  handleSubmit = () => {
    this.props.dispatch(writeSubmit(this.id));
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

export default connect(mapStateToProps)(AdminEdit);
