import React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from 'renderers/CodeBlock';
import Link from 'renderers/Link';

const Content = ({ children, ...props}) => (
  <Markdown source={children} renderers={{ CodeBlock, Link }} {...props} />
);

export default Content;
