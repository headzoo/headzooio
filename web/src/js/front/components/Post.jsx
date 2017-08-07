import React from 'react';
import { formatDate } from 'utils/dates';
import readingTime from 'reading-time';
import { LINK_DELAY } from 'common/constants';
import Auth from 'api/Auth';
import DelayLink from 'common/DelayLink';
import Content from 'common/markdown/Content';
import TweetShare from 'common/TweetShare';
import ContinueLink from 'common/ContinueLink';

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
          <TweetShare url={`https://headzoo.io/posts/${post.id}`} text={post.title} title="Tweet this post." />
        </div>

        {/* Title Start */}
        <h2 className="blog-title">
          <DelayLink
            to={`/posts/${post.id}`}
            delay={200}
            onDelayStart={() => {
              document.getElementById('footer').style.display = 'none';
            }}
          >
            {post.title}
          </DelayLink>
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
                <DelayLink to={`/admin/edit/${post.id}`} delay={LINK_DELAY}>edit</DelayLink>
                &nbsp;&middot;&nbsp;
                <DelayLink to={`/admin/delete/${post.id}`} delay={LINK_DELAY}>delete</DelayLink>
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
          <Content>
            {content}
          </Content>
        </div>
        {/* Content End */}

        {/* More Start */}
        {hasMore ? (
          <div className="entry-more">
            <div className="pull-left">
              <ContinueLink to={`/posts/${post.id}`} delay={LINK_DELAY} />
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
