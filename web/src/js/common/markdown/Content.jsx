import React from 'react';
import Markdown from 'react-markdown';
import CodeBlockRenderer from 'common/markdown/CodeBlockRenderer';
import LinkRenderer from 'common/markdown/LinkRenderer';

const Content = ({ children, ...props}) => (
  <Markdown source={children} renderers={{ CodeBlock: CodeBlockRenderer, Link: LinkRenderer }} {...props} />
);

export default Content;
