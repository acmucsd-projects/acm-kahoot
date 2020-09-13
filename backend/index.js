
// Kahoot
const indexRouter = require('./routes/index');
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const {
  roomCreate,
  roomJoin,
  roomAdminJoin,
  roomUserLeave,
  roomDelete,
  roomUsers,
  getQuestion,
  answerQuestion,
  getResults,
  incrementQuestion,
  getResultsAnswered,
  roomAdmin,
  setTime,
  setQuestionPack
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

app.use(
  cors({
    origin: "http://localhost:3001", // restrict calls to those this address
  })
);

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
    socket.score = 0;
    socket.correct = false;
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
  
  socket.on('start', (pack) => {
    const users = roomUsers(socket.room_name);
    const p = pack.q;
    setQuestionPack(socket.room_name,p).then(()=> {
        if(users.length > 0) {
          setTime(socket.room_name);
          getQuestion(socket.room_name).then((questio)=> {
            io.to(users[0].room).emit('sendQuestion', questio);
          });
        }
      }
    )
    console.log(p)
    
  });
  socket.on('nextQuestion', () => {
    const users = roomUsers(socket.room_name);
    if(users.length > 0) {
      incrementQuestion(socket.room_name);
      setTime(socket.room_name);
      getQuestion(socket.room_name).then((questio)=> {
        io.to(users[0].room).emit('sendQuestion', questio);
      });
    }
  });
  socket.on('answerQuestion', (ans) => {
    const adminId = roomAdmin(socket.room_name);
    const result = answerQuestion(socket.room_name, socket.id, ans.answer);
    console.log(result);
    socket.score = result.score;
    socket.correct = result.correct;
    io.to(adminId).emit('answeredUsers',getResultsAnswered(socket.room_name));
  });

  socket.on('seeResults', () => {
    // getResults(socket.room_name);
    io.to(socket.id).emit('correctUsers',getResults(socket.room_name));
    io.to(socket.room_name).emit('question_over');
  });

  socket.on("getPlayerResults", () => {
    io.to(socket.id).emit("myAnswer", {score : socket.score , correct : socket.correct});
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
