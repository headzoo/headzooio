import React from 'react';
import { Link } from 'react-router-dom';

const MetaWidget = () => (
  <div className="entry-widget">
    <h5 className="widget-title">
      Meta
    </h5>
    <ul className="meta-list">
      <li>
        <Link to="/login">
          <i className="ico-keyboard_arrow_right" />
          Log In
        </Link>
      </li>
      <li>
        <a href="#">
          <i className="ico-keyboard_arrow_right" />
          Entries RSS
        </a>
      </li>
      <li>
        <a href="#">
          <i className="ico-keyboard_arrow_right" />
          Comments RSS</a>
      </li>
      <li>
        <a href="/api">
          <i className="ico-keyboard_arrow_right" />
          API
        </a>
      </li>
    </ul>
  </div>
);

export default MetaWidget;
