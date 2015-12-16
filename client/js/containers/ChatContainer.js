import React, { Component, PropTypes } from 'react';
import * as Actions from '../actions/Actions';
import Chat from '../components/Chat';
import { connect } from 'react-redux';

class ChatContainer extends Component {

  render() {
    return (
      <Chat {...this.props} actions={Actions} />
    );
  }
}
function mapStateToProps(state) {
  return {
      messages: state.messages,
      currentRoom: state.rooms.get('currentRoom')
  }
}
export default connect(mapStateToProps)(ChatContainer)
