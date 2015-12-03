import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';
import { Input, Button } from 'react-bootstrap';

class Register extends Component {

  handleSubmit(event) {
    const { dispatch } = this.props;

    const userObj = {
      username: 'andybest',
      password: 'password'
    };

    dispatch(Actions.signUp(userObj)).then(() => {
      this.context.router.transitionTo('/chat');
    });
  }

  render() {
    return (
      <div>
        <div onClick={::this.handleSubmit}>Register</div>
      </div>
    );
  }
}

export default connect()(Register);
