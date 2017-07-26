import React from 'react';
import { Link } from 'react-router-dom';
import { Share } from 'react-twitter-widgets';
import { formatDate } from 'utils/dates';
import Markdown from 'react-markdown';
import CodeBlock from 'common/CodeBlock';

const Post = ({ post, readMore }) => (
  <article className="blog-article">
    <div className="blog-item-wrap">
      <div className="pull-right">
        <Share url={`https://headzoo.io/posts/${post.id}`} />
      </div>

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
          {formatDate(post.publicationDate)}
        </span>
      </div>
      {/* Meta End */}

      {/* Image Start */}
      {post.imageURL ? (
        <div className="feature-inner">
          <img src={post.imageURL} alt="Featured" />
        </div>
      ) : null}
      {/* Image End */}

      {/* Content Start */}
      <div className="post-content">
        <Markdown source={post.content} renderers={{ CodeBlock }} />
      </div>
      {/* Content End */}

      {/* More Start */}
      {readMore ? (
        <div className="entry-more">
          <div className="pull-left">
            <Link className="btn btn-common" to={`/posts/${post.id}`}>
              Read More <i className="ico-arrow-right" />
            </Link>
          </div>
        </div>
      ) : null}
      {/* More End */}
      <div className="blog-post-footer">
        <Link to={`/admin/edit/${post.id}`}>Edit</Link>
        &nbsp;&middot;&nbsp;
        <Link to={`/admin/delete/${post.id}`}>Delete</Link>
      </div>
    </div>
  </article>
);

Post.defaultProps = {
  readMore: false
};

export default Post;
