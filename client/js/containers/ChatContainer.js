import React, { Component, PropTypes } from 'react';
import * as Actions from '../actions/Actions';
import Chat from '../components/Chat';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChatContainer extends Component {

  render() {
    const actions = bindActionCreators(Actions, this.props.dispatch);
    return (
      <Chat {...this.props} actions={actions} />
    );
  }
}
function mapStateToProps(state) {
  return {
      messages: state.messages.get('messages'),
      currentRoom: state.rooms.get('currentRoom')
  }
}
export default connect(mapStateToProps)(ChatContainer)
