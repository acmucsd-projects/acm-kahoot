import React, { useState, useEffect } from 'react';
import socketIO from 'socket.io-client';

import styles from './styles.module.scss';
import ButtonsView from './containers/ButtonsView';
import WaitingView from './containers/WaitingView';
import AnswerView from './containers/AnswerView';

const ENDPOINT = 'http://localhost:3000';
const GameState = {
  Joining: 0,
  Loading: 1,
  Waiting: 2,
  Playing: 3,
  Results: 4,
  Finished: 5,
};

const answerTable = ['triangle', 'star', 'circle', 'square'];
let socket;

export default function PlayerGamePage() {
  const [gameState, setGameState] = useState(GameState.Joining);
  const [question, setQuestion] = useState({});
  const [choice, setChoice] = useState('');
  const [results, setResults] = useState({});

  useEffect(() => {
    socket = socket || socketIO(ENDPOINT);

    socket.on('sendQuestion', (question) => {
      if (question === -1) {
        setGameState(GameState.Finished);
      }

      setChoice('');
      setQuestion(question);
      setGameState(GameState.Playing);
    });

    socket.on('question_over', () => {
      socket.emit('getPlayerResults');
    });

    socket.on('myAnswer', (res) => {
      setResults(res);
      setGameState(GameState.Results);
    });

    joinGame('tester1', '873518');
    setGameState(GameState.Loading);

    return () => socket.disconnect();
  }, []);

  const handleAnswerClick = (answerIdx) => {
    setChoice(answerTable[answerIdx]);
    setGameState(GameState.Waiting);
    socket.emit('answerQuestion', { answer: answerIdx });
  };

  let content = null;
  switch (gameState) {
    case GameState.Joining:
      break;
    case GameState.Loading:
      break;
    case GameState.Waiting:
      content = <WaitingView shape={choice} />;
      break;
    case GameState.Playing:
      content = <ButtonsView onAnswer={handleAnswerClick} />;
      break;
    case GameState.Results:
      content = <AnswerView score={results.score} correct={results.correct} />;
      break;
    case GameState.Finished:
      content = 'You did it!';
      break;
    default:
      break;
  }

  return content;
}

function joinGame(username, code) {
  socket.emit('joinRoomPlayer', { username: username, room: code });
}