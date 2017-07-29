import React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from 'common/CodeBlock';

const Content = ({ children, ...props}) => (
  <Markdown source={children} renderers={{ CodeBlock }} {...props} />
);

export default Content;
