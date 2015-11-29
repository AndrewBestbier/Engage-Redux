import React, { Component, PropTypes } from 'react';
import * as Actions from '../actions/Actions';
import {Button, Modal, Input, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { updatePath } from 'redux-simple-router'

class Create extends Component {

  handleSubmit(event) {
    const { dispatch } = this.props;

    let room = {
      name: 'Andrew',
      id: 1
    }

    dispatch(Actions.createRoom(room)).then(() => {
      //this.context.router.transitionTo('/chat');
      console.log("created room");
    });
  }

  render() {
    return (
      <div>
        <h2>Create</h2>
        <button onClick={::this.handleSubmit}>Create</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      messages: state.messages.data,
  }
}

export default connect(mapStateToProps)(Create);
