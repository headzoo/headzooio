import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import Clipboard from 'clipboard';
import newid from 'utils/newid';
import { objectKeyFilter } from 'utils/objects';

['javascript', 'php', 'bash', 'yaml', 'xml', 'twig', 'java'].forEach((langName) => {
  const langModule = require(`highlight.js/lib/languages/${langName}`); // eslint-disable-line
  hljs.registerLanguage(langName, langModule);
});

export default class CodeBlockRenderer extends React.Component {
  static propTypes = {
    language: PropTypes.string,
    literal:  PropTypes.string,
    codeinfo: PropTypes.array,
    nodeKey:  PropTypes.string
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
        <pre {...objectKeyFilter(props, CodeBlockRenderer.propTypes)}>
          <code id={this.id} className={`language-${language}`} ref={(ref) => { this.codeRef = ref; }}>
            {literal.trim()}
          </code>
        </pre>
      </div>
    );
  }
}
