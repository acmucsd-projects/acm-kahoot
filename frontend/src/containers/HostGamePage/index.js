import React, { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';

import styles from './styles.module.scss';
import LobbyView from './containers/LobbyView';
import InGameView from './containers/InGameView';

const ENDPOINT = 'http://localhost:3000';
const INVALID_ROOM = 'already in-use';
const GameState = {
  Loading: 0,
  Waiting: 1,
  Playing: 2,
  Results: 3,
  Finished: 4,
};

let socket;

export default function HostGamePage({ pack = {} }) {
  const [roomID, setRoomID] = useState(String(Math.floor(Math.random() * 100000)));
  const [users, setUsers] = useState([]);
  const [gameState, setGameState] = useState(GameState.Loading);

  // Hook room updates on load. Disconnect on unload.
  useEffect(() => {
    socket = socket || socketIO(ENDPOINT);

    socket.on('roomUsers', (data) => {
      setRoomID(data.room);
      setUsers(data.users);
    });

    socket.on('invalid', () => {
      setRoomID(INVALID_ROOM);
    });

    createRoom(roomID);
    setGameState(GameState.Waiting);

    return () => socket.disconnect();
  }, []);

  let content = null;
  switch (gameState) {
    case GameState.Loading:
      break;
    case GameState.Waiting:
      content = <LobbyView roomID={roomID} users={users} onStartGame={() => startGame(pack)} />;
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