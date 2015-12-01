import {Map, List} from 'immutable';
import history from '../utils/history'


const initialState = Map({
  currentRoom: null
})

export default function(state = initialState, action) {
  switch (action.type) {
  case 'JOINING_ROOM':
    return state;
  case 'JOINING_ROOM_SUCCESS':
    history.replaceState(null, '/chat')
    return state.set('currentRoom', 'andrew')
  case 'JOINING_ROOM_FAIL':
    alert('failed');
    return state;
  case 'CREATING_ROOM':
    return state;
  case 'CREATE_ROOM_SUCCESS':
    return state;
  case 'CREATE_ROOM_FAIL':
    return state;
  default:
    return state;
  }
}
