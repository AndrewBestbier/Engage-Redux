import {customPost, customGet} from '../utils/customFetch';
import history from '../utils/history'

export function register(user) {
  return function(dispatch) {
    customPost('/api/register', user)
      .then(function(data) {
        dispatch(userLoggedIn(data));
        history.replaceState(null, '/dashboard')
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}

export function login(user) {
  return function(dispatch) {
    customPost('/api/login', user)
      .then(function(data) {
        dispatch(userLoggedIn(data));
        history.replaceState(null, '/dashboard')
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}

function userLoggedIn(data) {
  return {
    type: 'USER_LOGGED_IN',
    data: data
  };
}

export function logout() {
  return function(dispatch) {
    customGet('/api/logout/')
      .then(function(data) {
        dispatch(userLoggedOut());
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}

function userLoggedOut() {
  return {
    type: 'USER_LOGGED_OUT'
  };
}
