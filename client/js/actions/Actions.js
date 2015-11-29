import * as UserAPIUtils from '../utils/UserAPIUtils';

export function addMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    message
  };
}

export function joinRoom() {
  return {
    types: ['JOINING_ROOM', 'JOINING_ROOM_SUCCESS', 'JOINING_ROOM_FAIL'],
    promise: UserAPIUtils.joinRoom()
  };
}

export function createRoom(room) {
  return {
    types: ['CREATING_ROOM', 'CREATE_ROOM_SUCCESS', 'CREATE_ROOM_FAIL'],
    promise: UserAPIUtils.createRoom(room)
  };
}
