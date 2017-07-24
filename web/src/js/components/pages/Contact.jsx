'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {scrollToTop} from '../../utils/animation';
import {contactChange, contactSubmit, contactReset} from '../../actions/contactActions';
import Alert from '../Alert';
import Icon from '../Icon';

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
  
  constructor(props) {
    super(props);
  }
  
  componentWillUnmount() {
    this.props.dispatch(contactReset());
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.isSubmitted && prevProps.isSubmitted !== this.props.isSubmitted) {
      scrollToTop(500);
    }
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
    const {name, email, subject, message, errorMessage, isSubmitting, isSubmitted} = this.props;
    
    if (isSubmitted) {
      return (
        <div>
          <h3>Thank You!</h3>
          <p>
            Your message has been sent.
          </p>
        </div>
      );
    }
    
    return (
      <div className="row">
        
        {/* Info Start */}
        <div className="contact-info-wrapper clearfix">
  
          {/* Email Start */}
          <div className="col-md-4">
            <div className="contact-item-wrapper bl">
              <div className="icon">
                <i className="ico-email"></i>
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
                <i className="ico-skype"></i>
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
                <i className="ico-location_on"></i>
              </div>
              <h4>Location</h4>
              <p>
                Staten Island, NYC
              </p>
            </div>
          </div>
          {/* Location End */}
          
        </div>
        {/* Info End */}
  
        {/* Form Start */}
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-12">
            <Alert priority="danger" visible={errorMessage != ""}>
              {errorMessage}
            </Alert>
          </div>
          
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={name}
                required={true}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Your Name" />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                required={true}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Your Email" />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={subject}
                required={true}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Subject" />
            </div>
            
            <div className="form-group">
              <textarea
                rows="5"
                name="message"
                value={message}
                required={true}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Massage" />
            </div>
          </div>
          
          <div className="col-md-12">
            <button
              id="submit"
              type="submit"
              className="btn btn-common btn-sn btn-with-icon"
              disabled={isSubmitting}>
              Send Message
              <Icon name={isSubmitting ? 'circle-o-notch' : 'envelope'} spin={isSubmitting} />
            </button>
            <div className="clearfix"></div>
          </div>
        </form>
        {/* Form End */}
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.contact);
}

export default connect(mapStateToProps)(Contact);