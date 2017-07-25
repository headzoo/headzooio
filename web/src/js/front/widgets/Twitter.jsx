import React from 'react';
import Icon from 'common/Icon';

const TwitterWidget = () => (
  <div className="entry-widget">
    <h5 className="widget-title" style={{ marginBottom: 0 }}>
      Tweets
      <Icon name="twitter" />
    </h5>
    <a
      className="twitter-timeline"
      href="https://twitter.com/WebSeanHickey"
      style={{ padding: 12 }}
      data-height="600"
      data-link-color="#520E0E"
      data-chrome="noheader nofooter noborders transparent"
    >
      @WebSeanHickey
    </a>
    <script async src="//platform.twitter.com/widgets.js" charSet="utf-8" />
  </div>
);

export default TwitterWidget;
