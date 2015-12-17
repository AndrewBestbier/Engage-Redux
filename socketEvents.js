exports = module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.on('new message', function(message) {
      socket.broadcast.to(message.roomId).emit('backchannel', message);
    });

    socket.on('subscribe', function(room) {
        socket.join(room);
    });

    socket.on('unsubscribe', function(room) {
      socket.leave(room);
    })
  });
}
