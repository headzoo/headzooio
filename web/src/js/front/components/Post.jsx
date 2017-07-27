import React from 'react';
import { Link } from 'react-router-dom';
import { Share } from 'react-twitter-widgets';
import { formatDate } from 'utils/dates';
import readingTime from 'reading-time';
import Auth from 'api/Auth';
import Markdown from 'react-markdown';
import CodeBlock from 'common/CodeBlock';

const Post = ({ post, readMore }) => {
  let content = post.content;
  let hasMore = false;
  if (readMore) {
    content = post.content.split(/<!--\s*more\s*-->/, 2)
      .map(Function.prototype.call, String.prototype.trim);
    hasMore = content.length > 1;
    content = content[0];
  }

  return (
    <article className="blog-article">
      <div className="blog-item-wrap">
        <div className="pull-right">
          <Share url={`https://headzoo.io/posts/${post.id}`} options={{ text: post.title }} />
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
            &nbsp;&middot;&nbsp;
            {readingTime(post.content).text}
            {!Auth.isAuthenticated() ? null : (
              <span>
                &nbsp;&middot;&nbsp;
                <Link to={`/admin/edit/${post.id}`}>edit</Link>
                &nbsp;&middot;&nbsp;
                <Link to={`/admin/delete/${post.id}`}>delete</Link>
              </span>
            )}
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
          <Markdown source={content} renderers={{ CodeBlock }} />
        </div>
        {/* Content End */}

        {/* More Start */}
        {hasMore ? (
          <div className="entry-more">
            <div className="pull-left">
              <Link className="btn btn-common btn-more" to={`/posts/${post.id}`}>
                Continue <i className="ico-arrow-right" />
              </Link>
            </div>
          </div>
        ) : null}
        {/* More End */}
      </div>
    </article>
  );
};

Post.defaultProps = {
  readMore: false
};

export default Post;
