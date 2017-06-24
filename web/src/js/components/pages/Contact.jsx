'use strict';

import React from 'react';
import Alert from '../Alert';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:         "",
      email:        "",
      subject:      "",
      message:      "",
      errorMessage: ""
    };
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({errorMessage: "Fix this shit"});
  };
  
  render() {
    const {name, email, subject, message, errorMessage} = this.state;
    
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
              className="btn btn-common btn-sn">Send Message</button>
            <div className="clearfix"></div>
          </div>
        </form>
        {/* Form End */}
        
      </div>
    )
  }
}
