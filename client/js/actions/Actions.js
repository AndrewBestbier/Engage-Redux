import {customPost, customGet} from '../utils/customFetch';
import history from '../utils/history'

export function addMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    message
  };
}

export function joinRoom(roomCode) {
  return function(dispatch) {
    customGet('/api/rooms/'+roomCode)
      .then(function(data) {
        //dispatch(userLoggedIn(data));
        console.log("data");
        if(data.length === 0){
          throw new Error('Cannot find a room with that code');
        } else {
          dispatch(joinRoomSuccess(data));
          history.replaceState(null, '/chat')
        }
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}

function joinRoomSuccess(data) {
  return {
    type: 'JOINING_ROOM_SUCCESS',
    data: data
  };
}

export function createRoom(room) {
  return function(dispatch) {
    customPost('/api/rooms/new_room', room)
      .then(function(data) {
        //dispatch(userLoggedIn(data));
        console.log(data);
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}

export function signUp(user) {
  return function(dispatch) {
    customPost('/api/sign_up', user)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}

export function signIn(user) {
  return function(dispatch) {
    customPost('/api/sign_in', user)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}


export function signOut() {
  return function(dispatch) {
    customGet('/api/signout/'+roomCode)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(ex) {
        console.log(ex);
      });
  };
}
