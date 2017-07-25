import React from 'react';
import { connect } from 'react-redux';
import { writeLoad, writeDelete } from 'admin/actions/writeActions';
import Icon from 'common/Icon';

class WriteDelete extends React.Component {
  constructor(props) {
    super(props);
    this.id = parseInt(this.props.match.params.id, 10);
    props.dispatch(writeLoad(this.id));
  }

  componentDidMount() {
    document.title = 'Delete Post - headzoo.io';
    window.scrollTo(0, 0);
  }

  handleClick = () => {
    this.props.dispatch(writeDelete(this.id));
  };

  render() {
    const { title } = this.props;

    return (
      <article>
        <h2>Delete Post</h2>
        <p>
          You are about to delete &quot;{title}&quot;?
        </p>
        <p>
          <button className="btn btn-danger btn-with-icon" onClick={this.handleClick}>
            Delete
            <Icon name="trash" />
          </button>
        </p>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.write);
}

export default connect(mapStateToProps)(WriteDelete);
