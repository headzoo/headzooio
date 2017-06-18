'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';
import Alert from '../Alert';

class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };
  
  static propTypes = {
    dispatch:        PropTypes.func.isRequired,
    isFetching:      PropTypes.bool,
    errorMessage:    PropTypes.string,
    isAuthenticated: PropTypes.bool
  };
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  
  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextProps.isAuthenticated) {
      this.context.router.history.push('/');
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(login({
      username: this.refs.username.value,
      password: this.refs.password.value
    }));
  };
  
  render() {
    const { errorMessage } = this.props;
    const { username, password } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <Alert priority="danger" visible={errorMessage != ""}>
          {errorMessage}
        </Alert>
        
        <div className="form-group">
          <label htmlFor="input-username">
            Username
          </label>
          <input
            type="text"
            ref="username"
            value={username}
            onChange={e => this.setState({username: e.target.value})}
            className="form-control"
            id="input-username" />
        </div>
        
        <div className="form-group">
          <label htmlFor="input-password">
            Password
          </label>
          <input
            type="password"
            ref="password"
            value={password}
            onChange={e => this.setState({password: e.target.value})}
            className="form-control"
            id="input-password" />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.auth);
}

export default connect(mapStateToProps)(Login);
