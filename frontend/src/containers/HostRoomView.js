import React, { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';

import styles from '../styles/HostRoomView.module.scss';
import PlayerList from '../components/PlayerList';

const ENDPOINT = 'http://localhost:3000';
const INVALID_ROOM = 'already in-use';

let socket;

export default function HostRoomView() {
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

    startRoom();

    return () => socket.disconnect();
  }, []);

  function startRoom() {
    if (!roomID) {
      socket.emit('joinRoomAdmin', {
        username: 'admin',
        room: roomID,
      });
    }
  }

  let codeMessage;
  if (roomID) {
    codeMessage = (
      <div className={styles.code}>
        <span className={`${styles.accent} ${styles.large}`}>CODE:</span>
        <span className={styles.large}>{roomID}</span>
      </div>
    );
  }

  return (
    <div className={styles.HostRoomView}>
      {codeMessage}
      <PlayerList players={users} />
    </div>
  );
}