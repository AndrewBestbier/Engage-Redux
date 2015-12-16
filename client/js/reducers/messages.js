import {Map, List, fromJS} from 'immutable';

const initialState = List();

export default function(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_MESSAGE':
    return state.push(fromJS(action.data));;
  case 'JOINING_ROOM_SUCCESS':
    return state.merge(action.data);
  default:
    return state;
  }
}
