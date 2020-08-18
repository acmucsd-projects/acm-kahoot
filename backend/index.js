// Kahoot
var indexRouter = require('./routes/index');
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');

const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const {
  userJoin,
  userLeave,
  getRoomUsers
} = require('./utils/users');

const port = 3000;

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
var name = process.env.NAME;
var dbpswd = process.env.DB_PSW;
var dbname = process.env.DB_NAME;
var mongoURI = name == undefined ? "mongodb://localhost:27017/questionDB" : `mongodb+srv://${name}:${dbpswd}@cluster0-gzlxs.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify : false});

//gets rid of deprecation warning
mongoose.set('useCreateIndex', true);

const server = http.createServer(app);
const io = socketio(server);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', indexRouter);

io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });

});

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));