const userList = document.getElementById('users');
const correctUserList = document.getElementById('correctUsers');
const answeredUsersList = document.getElementById('answeredUsers');
const questionList = document.getElementById('questionList');
const roomID = document.getElementById('room-id');
const countdown = document.getElementById('countdown');

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

const socket = io();

let answerCount = 0;
let playerCount = 0;

let counts = [0, 0, 0, 0];

function start(packId) {
  async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url);
    return response.json(); // parses JSON response into native JavaScript objects
  }

  let u = window.location.href.slice(0,window.location.href.substring("room")) +'/packs/'+packId;
  const roomUrl = window.location.href.substring(0,window.location.href.indexOf("room"));
  console.log("main js" + roomUrl)
  getData(u, { })
    .then(data => {
      let q = data.questions
      socket.emit('start',{q,roomUrl});
    });
}
function nextQuestion() {
  socket.emit('nextQuestion');
  answeredUsersList.innerHTML = ``;
}
function seeResults() {
  clearTime();
  socket.emit('seeResults');
}
function getQuestions() {
  async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url);
    return response.json(); // parses JSON response into native JavaScript objects
  }
  getData(window.location.href.substring(0,window.location.href.indexOf("room")-1) + '/packs/names', { })
    .then(data => {
      questionList.innerHTML = `
        ${data.map(question => `<li>
        ${question[0]} <input id=${question[0]} type="button" value="Start Game!" onclick="start(\'${question[2]}\');"/>
        </li>`).join('')}`;
    });
}

// Join chatroom
socket.emit('joinRoomAdmin', { username, room });

// sends question
socket.on('sendQuestion',(q) => {
  answerCount = 0;
  document.getElementById('userCount').innerHTML = "Number of Answers Recieved: " + String(answerCount);
  if(question != -1) {
    document.getElementById('answer0').innerHTML = "";
    document.getElementById('answer1').innerHTML = "";
    document.getElementById('answer2').innerHTML = "";
    document.getElementById('answer3').innerHTML = "";
    document.getElementById('question').innerHTML = q.question;
  
    for (let i = 0; i < q.answers.length; i++) {
        document.getElementById('answer' + String(i)).innerHTML = q.answers[i].answer;
    }
    questionTimer(q.time);
    socket.emit('startTime');
  }
  else {
    document.getElementById('question').innerHTML = "out of questions";
    document.getElementById('answer0').innerHTML = "";
    document.getElementById('answer1').innerHTML = "";
    document.getElementById('answer2').innerHTML = "";
    document.getElementById('answer3').innerHTML = "";
    clearTime();
  }
  counts = [0, 0, 0, 0];
  document.getElementById('count1').innerHTML = "Answer 1: 0";
  document.getElementById('count2').innerHTML = "Answer 2: 0";
  document.getElementById('count3').innerHTML = "Answer 3: 0";
  document.getElementById('count4').innerHTML = "Answer 4: 0";
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
});

socket.on('singleAnswer', (ans) => {
  counts[ans]++;
  answerCount++;
  document.getElementById('userCount').innerHTML = "Number of Answers Recieved: " + String(answerCount);
  if (answerCount == playerCount) {
    seeResults();
  }

  let answer = parseInt(ans) + 1;
  document.getElementById('count' + String(answer)).innerHTML = "Answer " + String(parseInt(ans) + 1) + ": " + counts[ans];
});

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  playerCount = users.length;
  outputRoomID(room);
  outputUsers(users);
});

socket.on('invalid',() => {
  outputRoomID("ROOM ALREADY EXISTS/HAS ADMIN");
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

const clearTime = () => {
  currTime = 0;
  countdown.innerHTML = currTime;
  clearInterval(timer);
}
