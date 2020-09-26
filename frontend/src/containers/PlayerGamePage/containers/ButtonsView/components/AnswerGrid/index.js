import React from 'react';

import styles from './styles.module.scss';
import PlayerAnswerButton from './components/PlayerAnswerButton';

const shapes = ['triangle', 'star', 'circle', 'square'];

export default function ButtonGrid({ num, onClick }) {
  const buttons = [];
  for (let i = 0; i < num; i++) {
    buttons.push(<PlayerAnswerButton key={i} shape={shapes[i]} onClick={() => onClick(i)} />);
  }

  return (
    <div className={styles.AnswerGrid}>
      {buttons}
    </div>
  );
}