import {Map, List} from 'immutable';

const initialState = Map({
  currentRoom: null,
  messages: List()
})

export default function(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_MESSAGE':
    return state.update('messages', messages => messages.push({text: action.message.text}));
  case 'JOINING_ROOM':
    return state;
  case 'JOINING_ROOM_SUCCESS':
    return state.set('currentRoom', 'sexy')
  default:
    return state;
  }
}
