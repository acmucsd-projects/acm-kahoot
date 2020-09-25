import React from 'react';

import styles from './styles.module.scss';

import PlayerAnswerButton from './components/PlayerAnswerButton';

export default function ButtonGrid({ onClick, onCorrectClick }) {
  return (
    <div className={styles.AnswerGrid}>
      <PlayerAnswerButton shape='triangle' onClick={() => onClick(0)} />
      <PlayerAnswerButton shape='star' onClick={() => onClick(1)} />
      <PlayerAnswerButton shape='circle' onClick={() => onClick(2)} />
      <PlayerAnswerButton shape='square' onClick={() => onClick(3)} />
    </div>
  );
}