import {Map, List} from 'immutable';

const initialState = Map({
  currentRoom: null
})

export default function(state = initialState, action) {
  switch (action.type) {
  case 'JOINING_ROOM_SUCCESS':
    return state.set('currentRoom', action.roomCode)
  case 'CREATE_ROOM_SUCCESS':
    return state;
  default:
    return state;
  }
}
