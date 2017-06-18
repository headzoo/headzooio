'use strict';

import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="blog-header">
        <div className="container">
          <h1 className="blog-title">headzoo.io</h1>
          <p className="lead blog-description">An example blog template built with Bootstrap.</p>
        </div>
      </div>
    )
  }
}
