'use strict';

import React from 'react';

const MetaWidget = () => (
  <div className="entry-widget">
    <h5 className="widget-title">
      Meta
    </h5>
    <ul className="meta-list">
      <li>
        <a href="#">
          <i className="ico-keyboard_arrow_right"></i>
          Log In
        </a>
      </li>
      <li>
        <a href="#">
          <i className="ico-keyboard_arrow_right"></i>
          Entries RSS
        </a>
      </li>
      <li>
        <a href="#">
          <i className="ico-keyboard_arrow_right"></i>
          Comments RSS</a>
      </li>
      <li>
        <a href="#">
          <i className="ico-keyboard_arrow_right"></i>
          WordPress.org
        </a>
      </li>
    </ul>
  </div>
);

export default MetaWidget;