'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({post}) => (
  <article>
    <div className="blog-item-wrap">
    
      {/* Title Start */}
      <h2 className="blog-title">
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>
      {/* Title End */}
  
      {/* Meta Start */}
      <div className="entry-meta">
        <span className="meta-part">
          <i className="ico-user"></i>
          <a href="#">Sean Hickey</a>
        </span>
        <span className="meta-part">
          <i className="ico-calendar-alt-fill"></i>
          <a href="#">January 7, 2015</a>
        </span>
      </div>
      {/* Meta End */}
  
      {/* Image Start */}
      <div className="feature-inner">
        <a data-lightbox="roadtrip" href="/build/template/img/blog/blog-01.jpg">
          <img alt="" src="/build/template/img/blog/blog-01.jpg"/>
        </a>
      </div>
      {/* Image End */}
  
      {/* Content Start */}
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      {/* Content End */}
  
      {/* More Start */}
      <div className="entry-more">
        <div className="pull-left">
          <Link className="btn btn-common" to={`/posts/${post.id}`}>
            Read More <i className="ico-arrow-right"></i>
          </Link>
        </div>
        <div className="share-icon pull-right">
          <span className="socialShare"></span>
        </div>
      </div>
      {/* More End */}
      
    </div>
  </article>
);

export default Post;