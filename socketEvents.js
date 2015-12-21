exports = module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.on('submit message', function(message) {
      socket.broadcast.to(message.roomId).emit('broadcast message', message);
    });

    socket.on('submit vote', function(message) {
      socket.broadcast.to(message.roomId).emit('broadcast vote', message);
    });

    socket.on('subscribe', function(room) {
        socket.join(room);
    });

    socket.on('unsubscribe', function(room) {
      socket.leave(room);
    })
  });
}
