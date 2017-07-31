import React from 'react';
import { connect } from 'react-redux';
import { contentLoad } from 'actions/contentActions';
import Content from 'common/markdown/Content';
import Loading from 'common/Loading';

class AboutPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(contentLoad('about'));
    document.title = 'About - headzoo.io';
    window.scrollTo(0, 0);
  }

  render() {
    const { id, content, isFetching } = this.props;

    if (isFetching || id === 0) {
      return (
        <article className="about">
          <Loading />
        </article>
      );
    }

    return (
      <article className="about">
        <Content>
          {content}
        </Content>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.content);
}

export default connect(mapStateToProps)(AboutPage);
