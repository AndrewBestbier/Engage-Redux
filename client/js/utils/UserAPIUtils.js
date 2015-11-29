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
