import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from 'actions/authActions';
import Alert from 'common/Alert';
import Icon from 'common/Icon';

class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    dispatch:        PropTypes.func.isRequired,
    errorMessage:    PropTypes.string,
    isAuthenticated: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.usernameRef = null;
    this.passwordRef = null;
  }

  componentDidMount() {
    document.title = 'Login - headzoo.io';
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isAuthenticated) {
      this.context.router.history.push('/');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(login({
      username: this.usernameRef.value,
      password: this.passwordRef.value
    }));
  };

  render() {
    const { errorMessage, isFetching } = this.props;
    const { username, password } = this.state;

    return (
      <article className="container container-skinny section">
        <h2 className="section-title">
          Login
          <Icon name="sign-in" />
        </h2>
        <form onSubmit={this.handleSubmit}>
          <Alert priority="danger" visible={errorMessage !== ''}>
            {errorMessage.message}
          </Alert>

          <div className="form-group">
            <label htmlFor="input-username">
              Username
            </label>
            <input
              type="text"
              value={username}
              ref={(ref) => { this.usernameRef = ref; }}
              onChange={e => this.setState({ username: e.target.value })}
              className="form-control"
              id="input-username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-password">
              Password
            </label>
            <input
              type="password"
              value={password}
              ref={(ref) => { this.passwordRef = ref; }}
              onChange={e => this.setState({ password: e.target.value })}
              className="form-control"
              id="input-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-sn btn-common btn-with-icon"
          >
          Submit
          <Icon name="circle-o-notch" spin={isFetching} />
          </button>
        </form>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.auth);
}

export default connect(mapStateToProps)(Login);
