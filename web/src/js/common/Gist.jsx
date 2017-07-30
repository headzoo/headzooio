import React, { Component } from 'react';
import Loading from 'common/Loading';

export default class Gist extends Component {
  static propTypes = {
    /**
     * The gist id, e.g. "username/id"
     */
    id:   React.PropTypes.string.isRequired,
    /**
     * To embed a single specific file from the gist.
     */
    file: React.PropTypes.string
  };

  static gistCallbackId = 0;

  /**
   * Each time we request a Gist, we'll need to generate a new
   * global function name to serve as the JSONP callback.
   *
   * @returns {*}
   */
  static nextGistCallback = () => {
    const cb = `embed_gist_callback_${Gist.gistCallbackId}`;
    Gist.gistCallbackId += 1;
    return cb;
  };

  constructor(props) {
    super(props);
    this.id              = props.id;
    this.file            = props.file;
    this.stylesheetAdded = false;
    this.state = {
      src:     '',
      loading: true
    };
  }

  componentDidMount() {
    const { id, file } = this.props;

    // Create a JSONP callback that will set our state
    // with the data that comes back from the Gist site
    const gistCallback = Gist.nextGistCallback();
    window[gistCallback] = (gist) => {
      this.setState({
        src:     gist.div,
        loading: false
      });
      this.addStylesheet(gist.stylesheet);
    };

    let url = `https://gist.github.com/${id}.json?callback=${gistCallback}`;
    if (file) {
      url += `&file=${file}`;
    }

    // Add the JSONP script tag to the document.
    const script = document.createElement('script');
    script.type  = 'text/javascript';
    script.src   = url;
    document.head.appendChild(script);
  }

  /**
   * The Gist JSON data includes a stylesheet to add to the page
   * to make it look correct. `addStylesheet` ensures we only add
   * the stylesheet one time.
   *
   * @param {String} href
   */
  addStylesheet = (href) => {
    if (!this.stylesheetAdded) {
      this.stylesheetAdded = true;
      const link  = document.createElement('link');
      link.type = 'text/css';
      link.rel  = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  };

  render() {
    const { loading, src } = this.state;
    if (loading) {
      return <Loading size="2x" />;
    }
    return <div dangerouslySetInnerHTML={{ __html: src }} />;
  }
}
