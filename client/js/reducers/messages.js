import {Map, List} from 'immutable';

const initialState = Map({
  messages: List()
})

export default function(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_MESSAGE':
    return state.update('messages', messages => messages.push({text: action.message.text}));
  default:
    return state;
  }
}
