// Kahoot
var {questionSchema,packSchema} = require("./models/questionSchema");
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


const server = http.createServer(app);
const io = socketio(server);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

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





// if questionDB doesn't exist create it
mongoose.connect("mongodb://localhost:27017/questionDB", { useNewUrlParser : true , useUnifiedTopology : true});

//gets rid of deprecation warning
mongoose.set('useCreateIndex', true);

// name of the collection Pack(s)
const Pack = mongoose.model("pack", packSchema);

const Question = mongoose.model("question", questionSchema);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', function (req, res) {
    console.log("packName " + req.body.packName);
    var falseAnswers1 = [req.body.question1FAnswer1,req.body.question1FAnswer2];
    var falseAnswers2 = [req.body.question2FAnswer1,req.body.question2FAnswer2];
    const question1 = new Question({
        id: 1,
        name: req.body.question1Name,
        question: req.body.question1Question,
        answer: req.body.question1Answer,
        falseAnswers: falseAnswers1
    });
    const question2 = new Question({
        id: 2,
        name: req.body.question2Name,
        question: req.body.question2Question,
        answer: req.body.question2Answer,
        falseAnswers: falseAnswers2
    });
    var questions = [question1, question2];
    const pack1 = new Pack({
        id: 1,
        name: req.body.packName,
        questions: questions,
        description: req.body.packDesc
    });
    pack1.save();
    res.redirect("/");
});

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
