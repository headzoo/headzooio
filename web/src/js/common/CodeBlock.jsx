import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import Clipboard from 'clipboard';
import newid from 'utils/newid';
import { objectKeyFilter } from 'utils/objects';

export default class CodeBlock extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    literal:  PropTypes.string.isRequired,
    codeinfo: PropTypes.array.isRequired,
    nodeKey:  PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.id            = newid();
    this.clipboard     = null;
    this.copyButtonRef = null;
  }

  componentDidMount() {
    hljs.highlightBlock(this.codeRef);
    this.clipboard = new Clipboard(this.copyButtonRef);
    this.clipboard.on('success', this.handleClipboardSuccess);
  }

  componentWillUnmount() {
    this.clipboard = null;
  }

  handleClipboardSuccess = (e) => {
    e.clearSelection();
    this.setState({ copied: true }, () => {
      setInterval(() => {
        this.setState({ copied: false });
      }, 3000);
    });
  };

  render() {
    const { language, literal, ...props } = this.props;
    const { copied } = this.state;

    return (
      <div className="code-block-container">
        <div className="text-right">
          <button
            ref={(ref) => { this.copyButtonRef = ref; }}
            className="btn btn-link code-block-copy-btn"
            data-clipboard-target={`#${this.id}`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre {...objectKeyFilter(props, CodeBlock.propTypes)}>
          <code id={this.id} className={`language-${language}`} ref={(ref) => { this.codeRef = ref; }}>
            {literal.trim()}
          </code>
        </pre>
      </div>
    );
  }
}
