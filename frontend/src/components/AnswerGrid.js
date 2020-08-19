import React from 'react';

import styles from '../styles/AnswerGrid.module.scss';
import AnswerCard from '../components/AnswerCard';

function AnswerGrid(props) {
  return (
    <div className={styles.AnswerGrid}>
      <AnswerCard shape='triangle' />
      <AnswerCard shape='star' />
      <AnswerCard shape='circle' />
      <AnswerCard shape='square' />
    </div>
  );
}

export default AnswerGrid;