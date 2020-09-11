import React from 'react';

import styles from '../styles/QuestionListCard.module.scss';
import clipboardImg from '../assets/clipboard.svg';
import trashImg from '../assets/trash-bin.svg';

function QuestionListCard({ number, question, onClick }) {
  return (
    <div className={styles.QuestionListCard}>
      <div className={styles.icons}>
        <div>Q{number}</div>
        <img src={trashImg} alt='' />
        <img src={clipboardImg} alt='' />
      </div>
      <button className={styles.question} onClick={onClick}>
        {question}
      </button>
    </div>
  );
}

export default QuestionListCard;