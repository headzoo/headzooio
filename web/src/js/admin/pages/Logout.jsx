import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'admin/actions/authActions';

class Logout extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    dispatch:        PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  constructor(props) {
    super(props);
    props.dispatch(logout());
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isAuthenticated) {
      this.context.router.history.push('/admin/login');
    }
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.auth);
}

export default connect(mapStateToProps)(Logout);
