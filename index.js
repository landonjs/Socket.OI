var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
   // console.log('message: ' + msg); sends the message to the listener
    io.emit('chat message', msg); //sends the message to everyone includind the sender
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});