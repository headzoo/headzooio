import React from 'react';
import { connect } from 'react-redux';
import { postLoad, postChange, postSubmit } from 'actions/postActions';
import PostForm from 'components/PostForm';

class AdminEdit extends React.Component {
  constructor(props) {
    super(props);
    this.id = parseInt(this.props.match.params.id, 10);
  }

  componentDidMount() {
    this.props.dispatch(postLoad(this.id));
  }

  handleChange = (name, value) => {
    this.props.dispatch(postChange(name, value));
  };

  handleSubmit = () => {
    this.props.dispatch(postSubmit(this.id));
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
  return Object.assign({}, state.posts.post);
}

export default connect(mapStateToProps)(AdminEdit);
