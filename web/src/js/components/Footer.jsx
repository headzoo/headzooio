'use strict';

import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <footer className="blog-footer">
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    )
  }
}
