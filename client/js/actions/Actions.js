import * as UserAPIUtils from '../utils/UserAPIUtils';

export function addMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    message
  };
}

export function joinRoom() {
  return {
    types: ['JOIN_ROOM', 'JOIN_ROOM_SUCCESS', 'JOIN_ROOM_FAIL'],
    promise: UserAPIUtils.joinRoom()
  };
}
