import {Map, List} from 'immutable';

const initialState = Map({
  currentRoom: null
})

export default function(state = initialState, action) {
  switch (action.type) {
  case 'JOINING_ROOM':
    return state;
  case 'JOINING_ROOM_SUCCESS':
    console.log("succ");
    console.log(action);
    return state.set('currentRoom', action.data[0]._id)
  case 'JOINING_ROOM_FAIL':
    console.log('failed');
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
