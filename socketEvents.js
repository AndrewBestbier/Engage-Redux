exports = module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.on('new message', function(msg) {
      socket.broadcast.to(msg.room).emit('backchannel', msg);
    });

    socket.on('subscribe', function(room) {
        socket.join(room);
    })
  });
}
