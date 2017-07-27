import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { scrollToTop } from 'utils/animation';
import { contactChange, contactSubmit, contactReset } from 'actions/contactActions';
import Alert from 'common/Alert';
import Icon from 'common/Icon';

class Contact extends React.Component {
  static propTypes = {
    name:         PropTypes.string,
    email:        PropTypes.string,
    subject:      PropTypes.string,
    message:      PropTypes.string,
    errorMessage: PropTypes.string,
    isSubmitting: PropTypes.bool,
    isSubmitted:  PropTypes.bool
  };

  componentDidMount() {
    document.title = 'Contact Me - headzoo.io';
    window.scrollTo(0, 0);
    this.nameRef.focus();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isSubmitted && prevProps.isSubmitted !== this.props.isSubmitted) {
      scrollToTop(500);
    }
  }

  componentWillUnmount() {
    this.props.dispatch(contactReset());
  }

  handleChange = (e) => {
    this.props.dispatch(contactChange(
      e.target.name,
      e.target.value
    ));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(contactSubmit());
  };

  render() {
    const { name, email, subject, message, errorMessage, isSubmitting, isSubmitted } = this.props;

    if (isSubmitted) {
      return (
        <article>
          <h3>Thank You!</h3>
          <p>
            Your message has been sent.
          </p>
        </article>
      );
    }

    return (
      <article>
        <div className="row">

          {/* Info Start */}
          <div className="contact-info-wrapper clearfix hidden-xs hidden-sm">

            {/* Email Start */}
            <div className="col-md-4">
              <div className="contact-item-wrapper bl">
                <div className="icon">
                  <i className="ico-email" />
                </div>
                <h4>EMAIL</h4>
                <p>
                  sean@headzoo.io
                </p>
              </div>
            </div>
            {/* Email Start */}

            {/* Skype Start */}
            <div className="col-md-4">
              <div className="contact-item-wrapper bl">
                <div className="icon">
                  <i className="ico-skype" />
                </div>
                <h4>Skype</h4>
                <p>
                  web.sean.hickey
                </p>
              </div>
            </div>
            {/* Skype End */}

            {/* Location Start */}
            <div className="col-md-4">
              <div className="contact-item-wrapper bl">
                <div className="icon">
                  <i className="ico-location_on" />
                </div>
                <h4>Location</h4>
                <p>
                  Portsmouth, NH
                </p>
              </div>
            </div>
            {/* Location End */}

          </div>
          {/* Info End */}

          {/* Form Start */}
          <form onSubmit={this.handleSubmit}>
            <div className="col-md-12">
              <Alert priority="danger" visible={errorMessage !== ''}>
                {errorMessage}
              </Alert>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={this.handleChange}
                  ref={(ref) => { this.nameRef = ref; }}
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  required
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <textarea
                  rows="5"
                  name="message"
                  value={message}
                  required
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Massage"
                />
              </div>
            </div>

            <div className="col-md-12">
              <button
                id="submit"
                type="submit"
                className="btn btn-common btn-sn btn-with-icon"
                disabled={isSubmitting}
              >
                Send Message
                <Icon name={isSubmitting ? 'circle-o-notch' : 'envelope'} spin={isSubmitting} />
              </button>
              <div className="clearfix" />
            </div>
          </form>
          {/* Form End */}

        </div>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.contact);
}

export default connect(mapStateToProps)(Contact);
