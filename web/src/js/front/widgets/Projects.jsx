import React from 'react';
import Icon from 'common/Icon';

const Project = ({ name, src, shields, children }) => {
  let logo = null;
  let alt  = null;
  if (src.indexOf('npmjs.com') !== -1) {
    logo = 'https://headzoo.io/images/logo-npm-micro.png';
    alt  = 'npm logo';
  } else if (src.indexOf('github.com') !== -1) {
    logo = 'https://headzoo.io/images/logo-github-micro.png';
    alt  = 'github logo';
  }

  return (
    <li>
      <img src={logo} className="project-repo-img" alt={alt} />
      <h3 className="project-link">
        <a href={src}>
          {name}
        </a>
      </h3>
      <p className="project-description">
        {children}
      </p>
      {shields.map((url, i) => (
        <img key={i} src={url[0]} alt={url[1]} className="project-shield" />
      ))}
    </li>
  );
};

const ProjectsWidget = () => (
  <div className="entry-widget">
    <h5 className="widget-title">
      Projects
      <Icon name="bolt" />
    </h5>
    <ul className="meta-list">
      <Project
        name="react-moment"
        src="https://www.npmjs.com/package/react-moment"
        shields={[
          ['https://img.shields.io/travis/headzoo/react-moment/master.svg?style=flat-square', 'travis shield'],
          ['https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square', 'MIT license shield'],
          ['https://img.shields.io/npm/dm/react-moment.svg?style=flat-square', 'npm shield']
        ]}
      >
        React component for the moment date library.
      </Project>
      <Project
        name="surf"
        src="https://github.com/headzoo/surf"
        shields={[
          ['https://img.shields.io/travis/headzoo/surf/master.svg?style=flat-square', 'travis shield'],
          ['https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square', 'MIT license shield'],
          ['https://img.shields.io/github/stars/headzoo/surf.svg?style=flat-square', 'github stars shield']
        ]}
      >
        Stateful programmatic web browsing in Go.
      </Project>
      <Project
        name="react-headzoo-emoji"
        src="https://www.npmjs.com/package/react-headzoo-emoji"
        shields={[
          ['https://img.shields.io/travis/headzoo/react-headzoo-emoji/master.svg?style=flat-square', 'travis shield'],
          ['https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square', 'MIT license shield'],
          ['https://img.shields.io/npm/dm/react-headzoo-emoji.svg?style=flat-square', 'npm shield']
        ]}
      >
        React component wrapper for the twemoji library.
      </Project>
    </ul>
  </div>
);

export default ProjectsWidget;
