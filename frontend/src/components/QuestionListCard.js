import React from 'react';

import styles from '../styles/QuestionListCard.module.scss';
import clipboardImg from '../assets/clipboard.svg';
import trashImg from '../assets/trash-bin.svg';

function QuestionListCard(props) {
  return (
    <div className={styles.QuestionListCard}>
      <div className={styles.icons}>
        <div>Q12</div>
        <img src={trashImg} alt='' />
        <img src={clipboardImg} alt='' />
      </div>
      <div className={styles.label}>
        This is a question.
      </div>
    </div>
  );
}

export default QuestionListCard;