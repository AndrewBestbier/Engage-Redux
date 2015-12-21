import {customPost, customGet, customPut} from '../utils/customFetch';
import history from '../utils/history'

export function submitMessage(message, socket) {
  return function(dispatch) {
    customPost('/api/messages', message)
      .then(function(data) {
        //Now that the Post was successful, we can broadcast this message to all other users in the room
        dispatch(addMessage(data));
        socket.emit('submit message', data);
      })
      .catch(function(ex) {
        console.log(ex);
        //Show Error Message
      });
  };
}

export function addMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    data: message
  };
}

export function voteAction(message, socket) {
  return function(dispatch) {
    //Then Post the message to be written in our database.
    customPut('/api/messages', message)
      .then(function(data) {
        //Now that the Put was successful, we can broadcast this vote to all other users in the room
        dispatch(vote(message));
        socket.emit('submit vote', message);
      })
      .catch(function(ex) {
        console.log(ex);
        //Show Error Message
      });
  };
}

export function vote(message) {
  return {
    type: 'VOTE',
    data: message
  };
}

export function leaveRoom() {
  return {
    type: 'LEFT_ROOM'
  };
}


export function joinRoom(roomCode) {
  return function(dispatch) {
    customGet('/api/rooms/'+roomCode)
      .then(function(data) {
        dispatch(joinRoomSuccess(data, roomCode));
        history.replaceState(null, '/chat')
      })
      .catch(function(ex) {
        console.log(ex); //Room does not exist
      });
  };
}

function joinRoomSuccess(data, roomCode) {
  return {
    type: 'JOINING_ROOM_SUCCESS',
    data: data,
    roomCode: roomCode
  };
}

export function createRoom(room) {
  return function(dispatch) {
    customPost('/api/rooms/', room)
      .then(function(data) {
        dispatch(createRoomSuccess(data));
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}

function createRoomSuccess(data) {
  return {
    type: 'CREATE_ROOM_SUCCESS',
    data: data
  };
}
