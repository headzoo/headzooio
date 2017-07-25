import React from 'react';
import { connect } from 'react-redux';
import Editor from 'react-md-editor';
import classNames from 'classnames';
import { writeChange, writeSubmit, writeReset } from 'actions/writeActions';
import Alert from 'components/Alert';
import Icon from 'components/Icon';

class AdminWrite extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = null;
  }

  componentDidMount() {
    this.titleRef.focus();
  }

  componentWillUnmount() {
    this.props.dispatch(writeReset());
  }

  handleChange = (e) => {
    if (typeof e === 'string') {
      this.props.dispatch(writeChange('content', e));
    } else {
      this.props.dispatch(writeChange(
        e.target.name,
        e.target.value
      ));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(writeSubmit());
  };

  renderButton = (formatKey, label, action, pressed) => {
    const className = classNames(
      'btn btn-common MDEditor_toolbarButton',
      `MDEditor_toolbarButton--${formatKey}`,
      {
        'MDEditor_toolbarButton--pressed': pressed
      }
    );

    return (
      <button className={className} onClick={action} title={formatKey}>
        <span>{label}</span>
      </button>
    );
  };

  render() {
    const { title, content, imageURL, errorMessage, isSubmitting } = this.props;

    return (
      <article>
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-12">
            <Alert priority="danger" visible={errorMessage !== ''}>
              {errorMessage}
            </Alert>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="title"
                value={title}
                required
                onChange={this.handleChange}
                ref={(ref) => { this.titleRef = ref; }}
                className="form-control"
                placeholder="Title"
              />
            </div>

            <div className="form-group">
              <Editor
                name="content"
                value={content}
                onChange={this.handleChange}
                renderButton={this.renderButton}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="imageURL"
                value={imageURL}
                required
                onChange={this.handleChange}
                className="form-control"
                placeholder="Image URL"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-common btn-sn btn-with-icon"
                disabled={isSubmitting}
              >
                Save
                <Icon name={isSubmitting ? 'circle-o-notch' : 'pencil'} spin={isSubmitting} />
              </button>
            </div>
          </div>
          <div className="clearfix" />
        </form>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.write);
}

export default connect(mapStateToProps)(AdminWrite);
