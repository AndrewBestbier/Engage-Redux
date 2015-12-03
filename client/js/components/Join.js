import React, { Component, PropTypes } from 'react';
import * as Actions from '../actions/Actions';
import {Button, Modal, Input, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';

class Join extends Component {

  handleSubmit(event) {
    const { dispatch } = this.props;
    const dangerouslyHardcodedRoomCode = '41lIMsIEg';
    dispatch(Actions.joinRoom(dangerouslyHardcodedRoomCode));
  }

  render() {
    return (
      <div>
        <h2>Join</h2>
        <button onClick={::this.handleSubmit}>Join</button>
      </div>
    );
  }
}

export default connect()(Join);
