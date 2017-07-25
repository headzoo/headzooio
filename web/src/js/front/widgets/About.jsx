import React from 'react';
import Icon from 'common/Icon';

const AboutWidget = () => (
  <div className="entry-widget">
    <h5 className="widget-title">
      About
      <Icon name="user" />
    </h5>
    <div className="widget-inner">
      <p>
        Hi, I&apos;m Sean. A funkadelic coding monk on the path to engineering nirvana.
        Full stack web developer, full time geek, and U.S. Marine.
      </p>
      <p>
        I have over a decade of experience as a full stack developer and software architect. I specialize
        in the design, building, and monitoring of high scale web applications with an emphasis on cloud
        technologies such as Amazon Web Services. From the backend to the front end, including site design,
        UX, and SEO.
      </p>
    </div>
  </div>
);

export default AboutWidget;
