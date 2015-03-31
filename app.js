var express = require('express');
var app = express();

// web.app
app.use(express.static(__dirname + '/html/'));
app.listen(process.env.PORT || 8080, function() {
	console.log('server starting...');
});
/*
// socket.io
var server = require("http").createServer().listen(8081);
var io = require("socket.io").listen(server);

var userHash = {};

io.sockets.on("connection", function(socket) {

	socket.on('init', function(req) {
		console.log('->' + req.room);
		
	});
	
	socket.on("connected", function (name) {
		var msg = name + "が入室しました";
		userHash[socket.id] = name;
		io.sockets.emit("publish", {value: msg});
	});

	socket.on("publish", function (data) {
    io.sockets.emit("publish", {value:data.value});
  });

  socket.on("disconnect", function () {
    if (userHash[socket.id]) {
      var msg = userHash[socket.id] + "が退出しました";
      delete userHash[socket.id];
      io.sockets.emit("publish", {value: msg});
    }
  });
});
*/