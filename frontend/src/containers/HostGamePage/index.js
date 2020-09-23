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
  Results: 3,
  Finished: 4,
};

let socket;

export default function HostGamePage({ pack = {} }) {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [gameState, setGameState] = useState(GameState.Loading);

  // Hook room updates on load. Disconnect on unload.
  useEffect(() => {
    socket = socket || socketIO(ENDPOINT);

    socket.on('roomUsers', (data) => {
      setUsers(data.users);
    });

    socket.on('invalid', () => {
      
    });

    createRoom(id);
    setGameState(GameState.Waiting);

    return () => socket.disconnect();
  }, [id]);

  let content = null;
  switch (gameState) {
    case GameState.Loading:
      break;
    case GameState.Waiting:
      content = <LobbyView roomID={id} users={users} onStartGame={() => startGame(pack)} />;
      break;
    case GameState.Playing:
      content = <InGameView />;
      break;
    case GameState.Results:
      break;
    case GameState.Finished:
      break;
    default:
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

function nextQuestion() {
  socket.emit('nextQuestion');
  socket.emit('startTime');
}