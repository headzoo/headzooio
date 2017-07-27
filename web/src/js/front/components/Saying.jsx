import React from 'react';
import { Link } from 'react-router-dom';

const Saying = ({ saying }) => (
  <div className="intro-area">
    <h2 className="page-title animate-pop-in">
      <Link to="/">
        {saying.word}
      </Link>
    </h2>
    <h3 className="animate-pop-in">
      {saying.def}
    </h3>
  </div>
);

export default Saying;
