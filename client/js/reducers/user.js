import {Map} from 'immutable';

const initialState = Map({
  authenticated: false
})

export default function (state = initialState, action) {

  switch (action.type) {
    case 'AUTH_SIGNIN':
      return state.set('authenticated', true)
    case 'AUTH_SIGNOUT':
      return state.set('authenticated', false)
    default:
      return state;
  }
}
