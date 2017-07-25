import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import { objectKeyFilter } from 'utils/objects';

export default class CodeBlock extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    literal:  PropTypes.string.isRequired,
    codeinfo: PropTypes.array.isRequired,
    nodeKey:  PropTypes.string.isRequired
  };

  componentDidMount() {
    hljs.highlightBlock(this.codeRef);
  }

  render() {
    const { language, literal, ...props } = this.props;

    return (
      <pre {...objectKeyFilter(props, CodeBlock.propTypes)}>
        <code className={`language-${language}`} ref={(ref) => { this.codeRef = ref; }}>
          {literal.trim()}
        </code>
      </pre>
    );
  }
}
