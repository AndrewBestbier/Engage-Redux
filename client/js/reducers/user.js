import {Map, fromJS, List} from 'immutable';

const initialState = Map({
  authenticated: false,
  createdRooms: List()
})

export default function (state = initialState, action) {

  switch (action.type) {
    case 'USER_LOGGED_IN':
      return state.merge({
        authenticated: true,
        createdRooms: fromJS(action.data)
      });
    case 'USER_LOGGED_OUT':
      return state.set('authenticated', false)
    case 'CREATE_ROOM_SUCCESS':
      return state.update('createdRooms', createdRooms => createdRooms.push(fromJS(action.data)));
    default:
      return state;
  }
}
