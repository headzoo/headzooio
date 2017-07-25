import React from 'react';
import { Link } from 'react-router-dom';

const Saying = ({ saying }) => (
  <div className="intro-area">
    <h2 className="page-title">
      <Link to="/">
        {saying.word}
      </Link>
    </h2>
    <h3>
      {saying.def}
    </h3>
  </div>
);

export default Saying;
