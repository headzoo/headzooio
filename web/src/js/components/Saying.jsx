import React from 'react';
import {Link} from 'react-router-dom';

export default class Saying extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { saying } = this.props;
    
    return (
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
    )
  }
}
