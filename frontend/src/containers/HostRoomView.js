import React, { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';

import styles from '../styles/HostRoomView.module.scss';
import PlayerList from '../components/PlayerList';
import Button from '../components/Button';

const ENDPOINT = 'http://localhost:3000';
const INVALID_ROOM = 'already in-use';

let socket;

export default function HostRoomView({ pack = {} }) {
  const [roomID, setRoomID] = useState(String(Math.floor(Math.random() * 100000)));
  const [users, setUsers] = useState([]);

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

    return () => socket.disconnect();
  }, []);

  const codeMessage = (
    <div className={styles.code}>
      <span className={`${styles.accent} ${styles.large}`}>CODE:</span>
      <span className={styles.large}>{roomID}</span>
    </div>
  );

  return (
    <div className={styles.HostRoomView}>
      {codeMessage}
      <button className={styles.start} onClick={startGame}>START</button>
      <PlayerList players={users} />
    </div>
  );
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