import {Map, List, fromJS} from 'immutable';

const initialState = Map({
  currentRoom: null,
  createdRooms: List()
})

export default function(state = initialState, action) {
  switch (action.type) {
  case 'JOINING_ROOM_SUCCESS':
    return state.set('currentRoom', action.roomCode)
  case 'CREATE_ROOM_SUCCESS':
    return state.update('createdRooms', createdRooms => createdRooms.push(fromJS(action.data)));
  case 'USER_LOGGED_IN':
    return state.set('createdRooms', fromJS(action.data));
  case 'LEFT_ROOM':
    return state.set('currentRoom', null);
  default:
    return state;
  }
}
