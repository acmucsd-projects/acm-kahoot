import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import socketIO from 'socket.io-client';

import styles from './styles.module.scss';
import ButtonsView from './containers/ButtonsView';
import WaitingView from './containers/WaitingView';
import AnswerView from './containers/AnswerView';
import NicknameView from './containers/NicknameView';
import LoadingView from '../LoadingView';

const ENDPOINT = 'https://8081-91891172-3c0c-414b-a09d-1528f4f97306.us-west1.cloudshell.dev/';
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
  const { id } = useParams();
  const [gameState, setGameState] = useState(GameState.Joining);
  const [question, setQuestion] = useState({});
  const [choice, setChoice] = useState('');
  const [results, setResults] = useState({});

  useEffect(() => {
    socket = socket || socketIO(ENDPOINT);

    socket.on('sendQuestion', (question) => {
      if (question === -1) {
        setGameState(GameState.Finished);
        return;
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

    return () => {
      socket.disconnect();
      socket = null;
    }
  }, [id]);

  const handleJoinGame = (username) => {
    joinGame(username, id);
    setGameState(GameState.Loading);
  }

  const handleAnswerClick = (answerIdx) => {
    setChoice(answerTable[answerIdx]);
    setGameState(GameState.Waiting);
    socket.emit('answerQuestion', { answer: answerIdx });
  };

  let content = null;
  switch (gameState) {
    case GameState.Joining:
      content = <NicknameView roomID={id} onJoin={handleJoinGame} />;
      break;
    case GameState.Loading:
        content = <LoadingView />
      break;
    case GameState.Waiting:
      content = <WaitingView shape={choice} />;
      break;
    case GameState.Playing:
      content = <ButtonsView numAnswers={question.answers.length} onAnswer={handleAnswerClick} />;
      break;
    case GameState.Results:
      content = <AnswerView score={results.score} correct={results.correct} />;
      break;
    case GameState.Finished:
      content = `Final score: ${results.score}`;
      break;
    default:
      break;
  }

  return content;
}

function joinGame(username, code) {
  socket.emit('joinRoomPlayer', { username: username, room: code });
}