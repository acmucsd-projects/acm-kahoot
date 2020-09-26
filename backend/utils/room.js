const https = require("https");
const rooms = [];
const grace = 4000;
// Creates new room and room vars
const roomCreate = (id, username, room) => {
  newroom = {
    "count": 1,
    "name": room,
    "admin": {
      "id": id,
      "username": username
    },
    "users":[],
    "questions": [],
    "startTime": 0,
    //"totalTime": 15, Will be set during pack creation
    "questionNum": 0,
    "roomUrl": ""
  };
  rooms.push(newroom);
  return rooms;
}
const setQuestionPack = async (room, questions, roomUrl) => {
  const index = rooms.findIndex(single_room => single_room.name === room);
  console.log("room js " + roomUrl)
  if(questions.length > 0) {
    rooms[index].questions = questions;
    rooms[index].roomUrl = roomUrl;
  }
}
// gets question ret question obj
const getQuestion = async (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);
  // question is over the amount of questions
  if(rooms[index].questionNum + 1 > rooms[index].questions.length) {
    return -1;
  }
  // reset answered var in all users
  rooms[index].users.forEach((user) => {
    user.correct = false;
    user.answered = false;
  });
  const query = rooms[index].questions[rooms[index].questionNum];
  const url = rooms[index].roomUrl + "questions/" + query;
  let promise = new Promise((res,rej) => {
    https.get(url, function(response) {
      response.on("data", function(data) {
          const questionData = JSON.parse(data);
          rooms[index].questions[0] = questionData;
          res (questionData);
      });
    })
  });
    let result = await promise;
    // shuffle array  
    result.answers.sort(() => Math.random() - 0.5);
    return result;
}
// gets question ret question obj
const incrementQuestion = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);
  // question is over the amount of questions
  if(rooms[index].questionNum + 1 > rooms[index].questions.length) {
    return -1;
  }
  return rooms[index].questionNum++;
}

// answers question ret true/false
const answerQuestion = (room,id,answer) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if(rooms[index] == undefined || rooms[index].users == undefined) {
    return false;
  }

  const user = rooms[index].users.filter((user)=>user.id==id);
  user[0].correct = (rooms[index].questions[0].answers[parseInt(answer)].correct == true);
  if(user[0].correct) {
    let scaledTime = (Date.now() - rooms[index].startTime - grace) / (rooms[index].questions[0].time * 1000);
    if (scaledTime < 0) {
      user[0].score += rooms[index].questions[0].points;
    }
    else {
      user[0].score += Math.floor(rooms[index].questions[0].points * (1 - scaledTime));
    }
  }
  user[0].answered = true;
  return {correct: user[0].correct, score: user[0].score};
}

// get users who were correct (admin)
const getResults = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);
  const res = rooms[index].users.filter((user) => (user.answered == true && user.correct == true));
  const usersA = rooms[index].users;
  usersA.sort((a, b) => {
    return b.score - a.score;
  });
  // reset correct & answered
  for(users in rooms[index]) {
    users.correct = false;
    users.answered = false;
  }
  return usersA;
}

// get users who answered
const getResultsAnswered = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);
  const res = rooms[index].users.filter((user) => (user.answered == true));
  return res;
}

//Joins player to room
const roomJoin = (id, username, room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    const user = { id, username, room, correct:false, answered:false, score:0};
    rooms[index].users.push(user);
    rooms[index].count++;
    return user;
  }
  return 0;
}

//Joins/create room for admin
const roomAdminJoin = (id, username, room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    if (rooms[index].admin.id === null) {
      rooms[index].admin.id = id;
      rooms[index].admin.username = username;
      rooms[index].count++;
      return {id, username, room} ;
    }
    else {
      return 0;
    }
  }
  else {
    roomCreate(id, username, room);
    return {id, username, room};
  }
}

//User leaving room (Admins and Players)
const roomUserLeave = (id, username, room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    if (rooms[index].admin.id === id) {
      rooms[index].admin.id = null;
      rooms[index].count--;
      return {id, username, room};
    }
    else {
      const index2 = rooms[index].users.findIndex(user => user.id === id);
      if (index2 !== -1) {
        rooms[index].count--;
        return rooms[index].users.splice(index2, 1)[0];
      }
    }
  }
}

// Check if room is empty
const roomDelete = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    console.log(rooms[index].count);
  }

  if (index !== -1 && rooms[index].count === 0) {
    return rooms.splice(index, 1)[0];
  }
}

// Get room users
const roomUsers = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    return rooms[index].users;
  }
}

// Get room admin id
const roomAdmin = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    return rooms[index].admin.id;
  }
}

const setTime = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    rooms[index].startTime = Date.now();
  }
}

module.exports = {
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
};
