import React, { useEffect, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import socketIO from 'socket.io-client';

import styles from './styles.module.scss';
import LobbyView from './containers/LobbyView';
import InGameView from './containers/InGameView';

const ENDPOINT = 'http://localhost:3000';
const GameState = {
  Creating: 0,
  Loading: 1,
  Waiting: 2,
  Playing: 3,
  Answer: 4,
  Results: 5,
  Finished: 6,
};

const demoPack = {
  "questions": [
    "5f6d34ab7ea7fca4d4a404f2",
    "5f6d34ab7ea7fca4d4a404f5"
  ],
  "_id": "5f6d34ab7ea7fca4d4a404f1",
  "name": "Cats?",
  "description": "meow!",
  "__v": 0
};

let socket;
let countdown = 0;
let interval = null;

const statsState = { total: 0, counts: [0, 0, 0, 0] };
const statsReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      const newCounts = [...state.counts];
      newCounts[action.payload]++;
      return { total: state.total + 1, counts: newCounts };
    case 'clear':
      return { total: 0, counts: [0, 0, 0, 0] };
    default:
      return;
  }
};

const questionState = { number: 0, question: null };
const questionReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return { number: state.number + 1, question: action.payload };
    default:
      return;
  }
};

// Replace pack with packID and fetch pack first.
export default function HostGamePage({ pack = demoPack }) {
  const { id } = useParams();
  const [gameState, setGameState] = useState(GameState.Creating);
  const [users, setUsers] = useState([]);
  const [stats, dispatchStats] = useReducer(statsReducer, statsState);
  const [question, dispatchQuestion] = useReducer(questionReducer, questionState);
  const [timer, setTime] = useState(countdown);
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

      dispatchStats({ type: 'clear' });
      dispatchQuestion({ type: 'set', payload: question });
      countdown = question.time;
      setTime(countdown);
      interval = setInterval(updateTime, 1000);
      setGameState(GameState.Playing);
      
      socket.emit('startTime');
    });

    socket.on('singleAnswer', (numAnswer) => {
      dispatchStats({ type: 'increment', payload: numAnswer });
      // if (stats.total == users.length) {
      //   endRound();
      //   setTime(countdown);
      // }
    });

    socket.on('correctUsers', (results) => {
      setUsers(results);
    });

    socket.on('question_over', () => {
      setGameState(GameState.Answer);
    });

    createRoom(id);
    setGameState(GameState.Waiting);

    return () => socket.disconnect();
  }, [id]);

  function updateTime() {
    if (countdown <= 0) {
      endRound();
    } else {
      countdown--;
    }
    setTime(countdown);
  }

  const handleStartGame = () => {
    startGame(pack);
    setGameState(GameState.Loading);
  };

  const handleShowAnswer = () => {
    endRound();
    setTime(countdown);
    setGameState(GameState.Answer);
  };

  const handleShowResults = () => {
    setGameState(GameState.Results);
  };

  const handleNextQuestion = () => {
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
      content = <InGameView roomID={id} questionState={question} answer={correctAns} time={timer} stats={stats} onAction={handleShowAnswer} />;
      break;
    case GameState.Answer:
      content = <InGameView roomID={id} questionState={question} answer={correctAns} time={timer} stats={stats} onAction={handleNextQuestion} showAnswer />;
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

function endRound() {
  countdown = 0;
  clearInterval(interval);
  endQuestion();
}

function createRoom(roomID) {
  socket.emit('joinRoomAdmin', {
    username: 'admin',
    room: roomID,
  });
}

function startGame(pack) {
  socket.emit('start', { q: pack.questions });
}

function endQuestion() {
  socket.emit('seeResults');
}

function nextQuestion() {
  socket.emit('nextQuestion');
  socket.emit('startTime');
}