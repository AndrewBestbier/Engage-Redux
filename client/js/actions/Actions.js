import {customPost, customGet} from '../utils/customFetch';
import history from '../utils/history'

export function submitMessage(message) {
  return function(dispatch) {
    customPost('/api/messages', message)
      .then(function(data) {
        dispatch(addMessage(data));
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}

export function addMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    data: message
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
    customPost('/api/rooms/new_room', room)
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
