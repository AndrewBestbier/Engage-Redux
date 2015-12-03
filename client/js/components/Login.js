import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';
import { Input, Button } from 'react-bootstrap';

class Login extends Component {

  handleSubmit(event) {
    const { dispatch } = this.props;

    const userObj = {
      username: 'andy',
      password: 'password',
      confirmPassword: 'password'
    };
    dispatch(Actions.signIn(userObj));
  }

  render() {
    return (
      <div>
        <div onClick={::this.handleSubmit}>Login</div>
      </div>
    );
  }
}

export default connect()(Login);
