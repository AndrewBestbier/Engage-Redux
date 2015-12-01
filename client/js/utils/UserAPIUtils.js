import superagent from 'superagent';

export function joinRoom(roomCode) {
  return new Promise((resolve, reject) => {
    superagent
    .get('/api/rooms/'+roomCode)
    .end((err, res) => {
      if (err) {
        reject(err);
      } else if (res.body.length === 0){
        reject(Error("No room was found with that code"))
      } else {
        resolve(res.body);
      }
    });
  });
}

export function createRoom(room) {
  return new Promise((resolve, reject) => {
    superagent
    .post('/api/rooms/new_room')
    .send(room)
    .end((err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res.body);
      }
    });
  });
}

export function signUp(user) {
  console.log(user);
  return new Promise((resolve, reject) => {
    superagent
    .post('/api/sign_up')
    .send(user)
    .end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}

export function signIn(user) {
  return new Promise((resolve, reject) => {
    superagent
    .post('/api/sign_in')
    .send(user)
    .end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.body);
      }
    });
  });
}
export function signOut() {
  return new Promise((resolve, reject) => {
    superagent
    .get('/api/signout')
    .end((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}
