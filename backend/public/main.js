const userList = document.getElementById('users');
<<<<<<< HEAD
const correctUserList = document.getElementById('correctUsers');
const answeredUsersList = document.getElementById('answeredUsers');
const roomID = document.getElementById('room-id');
const countdown = document.getElementById('countdown');
=======
const roomID = document.getElementById('room-id');


>>>>>>> 693165bc150fdee4cba0ec9c9b0c2a995c9699c6

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

const socket = io();

<<<<<<< HEAD
function start() {
  socket.emit('start');
  questionTimer(15);
}
function nextQuestion() {
  socket.emit('nextQuestion');
  //correctUserList.innerHTML = ``;
  answeredUsersList.innerHTML = ``;
  questionTimer(15);
}
function seeResults() {
  socket.emit('seeResults');
}
=======
>>>>>>> 693165bc150fdee4cba0ec9c9b0c2a995c9699c6

// Join chatroom
socket.emit('joinRoomAdmin', { username, room });

<<<<<<< HEAD
// sends question
socket.on('sendQuestion',(question) => {
  if(question != -1) {
    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer1').innerHTML = question.answer;
    document.getElementById('answer2').innerHTML = question.falseAnswers[0];
    document.getElementById('answer3').innerHTML = question.falseAnswers[1];
    document.getElementById('answer4').innerHTML = question.falseAnswers[2];
  }
  else {
    document.getElementById('question').innerHTML = "out of questions";
    document.getElementById('answer1').innerHTML = "";
    document.getElementById('answer2').innerHTML = "";
    document.getElementById('answer3').innerHTML = "";
    document.getElementById('answer4').innerHTML = "";
  }
});

// get correct users
socket.on('correctUsers',(users) => {
  correctUserList.innerHTML = `
    ${users.map(user => `<li>${user.username} score:${user.score}</li>`).join('')}
  `;
});
// get users who have answered
socket.on('answeredUsers',(users) => {
  answeredUsersList.innerHTML = `
    ${users.map(user => `<li>user:${user.username} score:${user.score}</li>`).join('')}
  `;
  console.log(users + ' hello ')
});

=======
>>>>>>> 693165bc150fdee4cba0ec9c9b0c2a995c9699c6
// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomID(room);
  outputUsers(users);
});

socket.on('invalid',() => {
  outputRoomID("ROOM ALREADY EXISTS/HAS ADMIN");
<<<<<<< HEAD
});


=======

});

>>>>>>> 693165bc150fdee4cba0ec9c9b0c2a995c9699c6
// Add users to DOM
const outputUsers = (users) => {
  userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}

// Add room name to DOM
const outputRoomID = (room) => {
  roomID.innerText = room;
}
<<<<<<< HEAD


let timer;
let currTime;

const questionTimer = (time) => {
  countdown.innerHTML = time;
  currTime = time;
  timer = setInterval( updateTime, 1000);
}

const updateTime = () => {
  currTime--;
  countdown.innerHTML = currTime;
  if (currTime <= 0) {
    clearInterval(timer);
    seeResults();
  }
}
=======
>>>>>>> 693165bc150fdee4cba0ec9c9b0c2a995c9699c6
