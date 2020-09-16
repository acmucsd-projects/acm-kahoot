const userList = document.getElementById('users');
const roomID = document.getElementById('room-id');
const score = document.getElementById('score');
const correct = document.getElementById('correct');
const response = document.getElementById('responseStatus');

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

const socket = io();

// answer
const answerQuestion = (answer) => {
  console.log(answer);
  response.innerHTML = "You Answered!";
  console.log("answered " + answer)
  socket.emit('answerQuestion', {answer});
}

socket.on('question_over', () => {
  socket.emit('getPlayerResults');
});

socket.on('myAnswer', (data) => {
  correct.innerHTML = data.correct;
  score.innerHTML = data.score;
});

// answers question
socket.on('sendQuestion',(question) => {
  if(question != -1) {
    response.innerHTML = "New Question, pls answer!";

  }
  else {
    response.innerHTML = "No More Questions/Possible Err";
    
  }
});

// Join chatroom
socket.emit('joinRoomPlayer', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomID(room);
  outputUsers(users);
});

socket.on('invalid',() => {
  outputRoomID("Room DNE");
});

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
