import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-markmirror';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import Uploads from 'api/Uploads';
import Alert from 'common/Alert';
import Icon from 'common/Icon';

const ICONS = {
  find:     'search',
  findNext: 'chevron-up',
  findPrev: 'chevron-down',
  bold:     'bold',
  italic:   'italic',
  oList:    'list-ol',
  uList:    'list-ul',
  quote:    'quote-left',
  link:     'link',
  image:    'image',
  full:     'arrows'
};


export default class PostForm extends React.Component {
  static propTypes = {
    id:           PropTypes.number,
    title:        PropTypes.string,
    content:      PropTypes.string,
    imageURL:     PropTypes.string,
    published:    PropTypes.bool,
    errorMessage: PropTypes.string,
    isSubmitting: PropTypes.bool,
    onChange:     PropTypes.func,
    onSubmit:     PropTypes.func
  };

  static defaultProps = {
    id:           0,
    title:        '',
    content:      '',
    imageURL:     '',
    errorMessage: '',
    published:    true,
    isSubmitting: false,
    onChange:     () => {},
    onSubmit:     () => {}
  };

  constructor(props) {
    super(props);
    this.titleRef  = null;
    this.editorRef = null;
  }

  componentDidMount() {
    this.titleRef.focus();
  }

  handleChange = (e) => {
    if (typeof e === 'string') {
      this.props.onChange('content', e);
    } else if (e.target.name === 'published') {
      this.props.onChange('published', e.target.checked);
    } else {
      this.props.onChange(e.target.name, e.target.value);
    }
  };

  handleEditorDrop = (files) => {
    Uploads.upload(files[0])
      .then((resp) => {
        const cm = this.editorRef.getCodeMirror();
        cm.replaceSelection(`![${resp.name}](${resp.url})`);
      });
  };

  handleImageDrop = (files) => {
    Uploads.upload(files[0])
      .then((resp) => {
        this.props.onChange('imageURL', resp.url);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  renderButton = (markmirror, command, handler, pressed, title, label) => {
    const className = classNames(
      'btn btn-common markmirror__button',
      `markmirror__button--${command}`,
      {
        'markmirror__button--pressed': pressed,
        'pull-right':                  command === 'full'
      }
    );

    return (
      <button type="button" className={className} onClick={handler} title={title}>
        {ICONS[command] ? <Icon name={ICONS[command]} /> : label}
      </button>
    );
  };

  render() {
    const { id, title, content, imageURL, published, errorMessage, isSubmitting } = this.props;


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

          <div className="form-group" style={{ height: 600 }}>
            <Editor
              key={content === '' ? 0 : id}
              name="content"
              value={content}
              ref={(ref) => { this.editorRef = ref; }}
              onChange={this.handleChange}
              renderButton={this.renderButton}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-image">Image</label>
            <Dropzone
              style={{}}
              className="dropzone"
              activeClassName="dropzone-active"
              onDropAccepted={this.handleImageDrop}
              disableClick
            >
              <input
                id="input-image"
                type="text"
                name="imageURL"
                value={imageURL}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Image URL"
              />
            </Dropzone>
          </div>

          <div className="checkbox">
            <label htmlFor="input-published">
              <input
                id="input-published"
                type="checkbox"
                name="published"
                checked={published}
                onChange={this.handleChange}
              />
              Published
            </label>
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
