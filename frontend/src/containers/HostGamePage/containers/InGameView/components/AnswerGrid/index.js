import React from 'react';

import styles from './styles.module.scss';
import AnswerCard from './components/AnswerCard';

export default function AnswerGrid() {
  return (
    <div className={styles.AnswerGrid}>
      <AnswerCard shape='triangle' />
      <AnswerCard shape='star' />
      <AnswerCard shape='circle' />
      <AnswerCard shape='square' />
    </div>
  );
}