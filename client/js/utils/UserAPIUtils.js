import superagent from 'superagent';

export function joinRoom() {
  return new Promise((resolve, reject) => {
    superagent
    .get('/api/join_room')
    .end((err, res) => {
      if (err) {
        console.log(err);
        Promise.reject(err);
      } else {
        console.log(res);
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
        console.log(err);
        Promise.reject(err);
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
        Promise.reject(err);
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
