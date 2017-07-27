import React from 'react';
import GithubStream from 'react-github-stream';
import Icon from 'common/Icon';

const GithubStreamWidget = () => (
  <div className="entry-widget">
    <h5 className="widget-title" style={{ marginBottom: 0 }}>
      Github
      <Icon name="github" />
    </h5>
    <GithubStream user="headzoo" limit={5} />
  </div>
);

export default GithubStreamWidget;
