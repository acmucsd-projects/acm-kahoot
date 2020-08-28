
// Kahoot
const indexRouter = require('./routes/index');
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');

const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const {
  roomCreate,
  roomJoin,
  roomAdminJoin,
  roomUserLeave,
  roomDelete,
  roomUsers
} = require('./utils/room');

const port = 3000;

const app = express();


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const name = process.env.NAME;
const dbpswd = process.env.DB_PSW;
const dbname = process.env.DB_NAME;

const mongoURI = name == undefined ? "mongodb://localhost:27017/questionDB" : `mongodb+srv://${name}:${dbpswd}@cluster0-gzlxs.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify : false});


//gets rid of deprecation warning
mongoose.set('useCreateIndex', true);


const server = http.createServer(app);
const io = socketio(server);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', indexRouter);

io.on('connection', socket => {
  socket.on('joinRoomAdmin', ({ username, room }) => {
    socket.username = username;
    socket.room_name = room;
    const user = roomAdminJoin(socket.id, username, room);
    if (user === 0) {
      io.to(socket.id).emit('invalid', {});
    }
    else {
      socket.join(user.room);

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: roomUsers(user.room)
      });
    }
  });

  socket.on('joinRoomPlayer', ({ username, room }) => {
    socket.username = username;
    socket.room_name = room;
    console.log("Player connect: " + username );

    const user = roomJoin(socket.id, username, room);
    if (user === 0) {
      io.to(socket.id).emit('invalid', {});
    }
    else {
      socket.join(user.room);

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: roomUsers(user.room)
      });
    }
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    console.log(socket.username + ", " + socket.room_name);
    const user = roomUserLeave(socket.id, socket.username, socket.room_name);
    if (user) {
      roomDelete(user.room);
      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: roomUsers(user.room)
      });
    }
  });

});

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
