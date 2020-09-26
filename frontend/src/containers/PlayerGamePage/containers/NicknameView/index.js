import React, { useState } from 'react';

import styles from './styles.module.scss';
import Button from '../../../../components/Button';
import MatchInfo from '../../../../components/MatchInfo';

export default function NicknameView({ roomID, onJoin }) {
  const [username, setUsername] = useState('');

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  }

  return(
    <div>
      <MatchInfo roomID={roomID} username={username} />
      <div className={styles.container}>
        <div className={styles.header}>QUIZ NAME</div>
        <input type="text" placeholder="ENTER NICKNAME" size="7=8" onChange={handleNameChange}></input>
        <Button variant={styles.enternicknamepagebutton} label="LET'S GO" onClick={() => onJoin(username)} />
      </div>
    </div>
  );
}