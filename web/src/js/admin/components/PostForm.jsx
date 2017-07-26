import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-md-editor';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import Alert from 'common/Alert';
import Icon from 'common/Icon';

const ICONS = {
  bold:   'bold',
  italic: 'italic',
  oList:  'list-ol',
  uList:  'list-ul',
  quote:  'quote-left',
  link:   'link',
  image:  'image',
  full:   'arrows'
};

export default class PostForm extends React.Component {
  static propTypes = {
    title:        PropTypes.string,
    content:      PropTypes.string,
    imageURL:     PropTypes.string,
    errorMessage: PropTypes.string,
    isSubmitting: PropTypes.bool,
    onChange:     PropTypes.func,
    onSubmit:     PropTypes.func
  };

  static defaultProps = {
    title:        '',
    content:      '',
    imageURL:     '',
    errorMessage: '',
    isSubmitting: false,
    onChange:     () => {},
    onSubmit:     () => {}
  };

  constructor(props) {
    super(props);
    this.titleRef = null;
  }

  componentDidMount() {
    this.titleRef.focus();
  }

  handleChange = (e) => {
    if (typeof e === 'string') {
      this.props.onChange('content', e);
    } else {
      this.props.onChange(e.target.name, e.target.value);
    }
  };

  handleDrop = (acceptedFiles) => {
    console.info(acceptedFiles);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
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
      <button type="button" className={className} onClick={action} title={formatKey}>
        {ICONS[formatKey] ? <Icon name={ICONS[formatKey]} /> : label}
      </button>
    );
  };

  render() {
    const { title, content, imageURL, errorMessage, isSubmitting } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-md-12">
          <Alert priority="danger" visible={errorMessage !== ''}>
            {errorMessage}
          </Alert>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="input-title">Title</label>
            <input
              id="input-title"
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              ref={(ref) => { this.titleRef = ref; }}
              className="form-control"
              placeholder="Title"
              required
            />
          </div>

          <div className="form-group">
            <Dropzone style={{}} onDropAccepted={this.handleDrop} disableClick>
              <Editor
                name="content"
                value={content}
                onChange={this.handleChange}
                renderButton={this.renderButton}
                className="form-control"
                required
              />
            </Dropzone>
          </div>

          <div className="form-group">
            <label htmlFor="input-image">Image</label>
            <input
              id="input-image"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Image URL"
              required
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-common btn-sn btn-with-icon"
              disabled={isSubmitting}
            >
              Save
              <Icon name="circle-o-notch" spin={isSubmitting} />
            </button>
          </div>
        </div>
        <div className="clearfix" />
      </form>
    );
  }
}
