import {Map} from 'immutable';

const initialState = Map({
  authenticated: false
})

export default function (state = initialState, action) {

  switch (action.type) {
    case 'USER_LOGGED_IN':
      return state.set('authenticated', true)
    case 'USER_LOGOUT':
      return state.set('authenticated', false)
    default:
      return state;
  }
}
