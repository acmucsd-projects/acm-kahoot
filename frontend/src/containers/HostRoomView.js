import React from 'react';
import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';

import styles from '../styles/HostRoomView.module.scss';
import PlayerList from '../components/PlayerList';

const ENDPOINT = 'http://localhost:3000';
const INVALID_ROOM = 'Code already in use';
let socket;

export default function HostRoomView() {
  const [inputID, setID] = useState('');
  const [inputName, setName] = useState('');
  const [roomID, setRoom] = useState('');
  const [users, setUsers] = useState('');

  // Hook room updates on load. Disconnect on unload.
  useEffect(() => {
    socket = socket || socketIO(ENDPOINT);

    socket.on('roomUsers', (data) => {
      setRoom(data.room);
      setUsers(data.users);
    });

    socket.on('invalid', () => {
      setRoom(INVALID_ROOM);
    });

    // start room based on url(?)

    return () => socket.disconnect();
  }, []);

  function handleIDChange(e) {
    setID(e.target.value);
  }
  
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    if (!roomID) {
      socket.emit('joinRoomAdmin', {
        username: inputName,
        room: inputID,
      });
    }
    e.preventDefault();
  }

  let codeMessage = (
    <div className={styles.code}>
      Enter ID
    </div>
  );
  if (roomID) {
    codeMessage = (
      <div className={styles.code}>
        <span className={styles.accent + ' ' + styles.large}>CODE:</span>
        <span className={styles.large}>{roomID}</span>
      </div>
    );
  }

  return (
    <div className={styles.HostRoomView}>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' onChange={handleNameChange} />
        <input type='text' placeholder='Room ID' onChange={handleIDChange} />
        <input type='submit' />
      </form>
      {codeMessage}
      <PlayerList players={users} />
    </div>
  );
}