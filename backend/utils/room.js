const http = require("http");
const rooms = [];

// Creates new room
const roomCreate = (id, username, room) => {
  newroom = {
    "count": 1,
    "name": room,
    "admin": {
      "id": id,
      "username": username
    },
    "users":[],
    "questions": [
      {
        "name": "question1",
        "question": "are cats evil?",
        "answer": "no",
        "falseAnswers": [
          "obviously",
          "maybe",
          "sorta"
        ]
      },
      {
        "name": "question2",
        "question": "are cats amazing?",
        "answer": "obviously",
        "falseAnswers": [
          "nope",
          "haha, no way!",
          "no"
        ]
      },
      {
        "name": "question3",
        "question": "how are you doing today?",
        "answer": "well",
        "falseAnswers": [
          "yes",
          "no!",
          "haha"
        ]
      }
    ],
    "startTime": 0,
    "totalTime": 15, // TODO: MAKE SURE TO SET THIS LATER WITH ADDITIONAL ARG
    "questionNum": 0 
  };
  rooms.push(newroom);
  return rooms;
}
const setQuestionPack = async (room, questions) => {
  const index = rooms.findIndex(single_room => single_room.name === room);
  if(questions.length > 0) {
    rooms[index].questions = questions;
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
  if(rooms[index].questions[rooms[index].questions] != undefined) {
    return rooms[index].questions[rooms[index].questionNum];
  }
  else {
    const query = rooms[index].questions[rooms[index].questionNum];
    const url = "http://localhost:3000/questions/" + query;
    
    let promise = new Promise((res,rej) => {
      http.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const questionData = JSON.parse(data);
            console.log(questionData);
            rooms[index].questions[0] = questionData;
            res (questionData);
        });
      })
    });
    let result = await promise;
    return result;
  }
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
  user[0].correct = (rooms[index].questions[0].answer == answer);
  if(user[0].correct) {
    user[0].score += rooms[index].totalTime * 1000 - (Date.now() - rooms[index].startTime);
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
  // reset correct
  for(users in rooms[index]) {
    users.correct = false;
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
