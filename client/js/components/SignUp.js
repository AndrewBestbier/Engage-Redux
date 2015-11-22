import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';
import { Input, Button } from 'react-bootstrap';

export default class SignUp extends Component {


  handleSubmit(event) {
    const { dispatch } = this.props;

    const userObj = {
      username: 'andy',
      password: 'password',
      confirmPassword: 'password'
    };

    dispatch(Actions.signUp(userObj)).then(() => {
      this.context.router.transitionTo('/chat');
    });
  }

  render() {
    return (
      <div>
        <div onClick={::this.handleSubmit}>Sign Up</div>
      </div>
    );
  }
}
