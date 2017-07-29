import React from 'react';
import { connect } from 'react-redux';
import { contentLoad } from 'actions/contentActions';
import Content from 'common/Content';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(contentLoad('about'));
  }

  componentDidMount() {
    document.title = 'About - headzoo.io';
    window.scrollTo(0, 0);
  }

  render() {
    const { content } = this.props;
    if (!content.id) {
      return null;
    }
    return (
      <article className="about">
        <h2 className="blog-title" style={{ marginBottom: 20 }}>
          {content.title}
        </h2>
        <Content>
          {content.content}
        </Content>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, { content: state.content });
}

export default connect(mapStateToProps)(AboutPage);
