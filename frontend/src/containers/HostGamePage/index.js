import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import socketIO from 'socket.io-client';

import styles from './styles.module.scss';
import LobbyView from './containers/LobbyView';
import InGameView from './containers/InGameView';

const ENDPOINT = 'http://localhost:3000';
const GameState = {
  Loading: 0,
  Waiting: 1,
  Playing: 2,
  Answer: 3,
  Results: 4,
  Finished: 5,
};

let socket;

const demoPack = {
  "_id": "5f699637c6f9b141900e0367",
  "name": "wowiwe",
  "description": "No description.",
  "questions": [
    {
      "name": "Default Question",
      "question": "Do you like apples?",
      "answers": [
        {
          'answer': 'Answer 1',
          'correct': false,
        },
        {
          'answer': 'Answer 2',
          'correct': true,
        },
        {
          'answer': 'Answer 3',
          'correct': false,
        },
        {
          'answer': 'Answer 4',
          'correct': false,
        },
      ],
    },
  ],
};

export default function HostGamePage({ pack = demoPack }) {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [gameState, setGameState] = useState(GameState.Loading);
  const [countdown, setCountdown] = useState(0);
  const [curQuestion, setQuestion] = useState(pack.questions[0] || {});
  const [answerData, setAnswerData] = useState([]);
  const [correctAns, setCorrectAns] = useState(0);

  // Hook room updates on load. Disconnect on unload.
  useEffect(() => {
    socket = socket || socketIO(ENDPOINT);

    socket.on('invalid', () => {
      
    });

    socket.on('roomUsers', (data) => {
      setUsers(data.users);
    });

    socket.on('sendQuestion', (question) => {
      if (question === -1) {
        setGameState(GameState.Finished);
        return;
      }

      const answerData = question.answers.map(ans => 0);
      answerData.push(0);
      setAnswerData(answerData);
      setCountdown(question.time);
      const timer = setInterval(updateTime, 1000, [timer]);
      setQuestion(question);
      setGameState(GameState.Playing);
    });

    socket.on('singleAnswer', (numAnswer) => {
      answerData[0]++;  // Increase number of total answers
      answerData[numAnswer]++;
      if (answerData[0] == users.length) {
        endQuestion();
      }
    });

    createRoom(id);
    setGameState(GameState.Waiting);

    return () => socket.disconnect();
  }, [id]);

  function updateTime(timer) {
    setCountdown(countdown - 1);
    if (countdown <= 0) {
      clearInterval(timer);
      endQuestion();
    }
  }

  const handleStartGame = () => {
    startGame(pack);
    // setGameState(GameState.Loading);
    setGameState(GameState.Playing);
  };

  const handleEndQuestion = () => {
    endQuestion();
    setGameState(GameState.Answer);
  };

  const handleNextAnswer = () => {
    setGameState(GameState.Results);
  };

  const handleNextResults = () => {
    nextQuestion();
    setGameState(GameState.Loading);
  };

  let content = null;
  switch (gameState) {
    case GameState.Loading:
      break;
    case GameState.Waiting:
      content = <LobbyView roomID={id} users={users} onStartGame={handleStartGame} />;
      break;
    case GameState.Playing:
      content = <InGameView question={curQuestion} answer={correctAns} time={countdown} stats={answerData} onAction={handleEndQuestion} />;
      break;
    case GameState.Answer:
      content = <InGameView question={curQuestion} answer={correctAns} time={countdown} stats={answerData} onAction={handleNextAnswer} showAnswer />;
      break;
    case GameState.Results:
      break;
    case GameState.Finished:
      break;
    default:
      // ERROR
      break;
  }

  return content;
}

function createRoom(roomID) {
  socket.emit('joinRoomAdmin', {
    username: 'admin',
    room: roomID,
  });
}

function startGame(pack) {
  socket.emit('start', pack);
}

function endQuestion() {
  socket.emit('seeResults');
}

function nextQuestion() {
  socket.emit('nextQuestion');
  socket.emit('startTime');
}