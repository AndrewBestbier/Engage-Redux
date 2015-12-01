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


export function signIn(user) {
  return {
    types: ['AUTH_SIGNIN',
      'AUTH_SIGNIN_SUCCESS',
      'AUTH_SIGNIN_FAIL'],
    promise: UserAPIUtils.signIn(user)
  };
}

export function signUp(user) {
  return {
    types: ['AUTH_SIGNUP',
      'AUTH_SIGNUP_SUCCESS',
      'AUTH_SIGNUP_FAIL'],
    promise: UserAPIUtils.signUp(user)
  };
}

export function signOut(user) {
  return {
    types: ['AUTH_SIGNOUT',
      'AUTH_SIGNOUT_SUCCESS',
      'AUTH_SIGNOUT_FAIL'],
    promise: UserAPIUtils.signOut(user)
  };
}
