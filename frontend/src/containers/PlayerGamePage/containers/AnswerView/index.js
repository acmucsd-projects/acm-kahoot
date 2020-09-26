import React from 'react';

import styles from './styles.module.scss';
import MatchInfo from '../../../../components/MatchInfo.js';
import AnswerCard from './components/AnswerCard';

export default function AnswerView({ score, correct = false }) {
  return (
    <div>
      <MatchInfo />            
      <div className={styles.centercontainer}>
        {correct ? <AnswerCard score={score} correct /> : <AnswerCard score={score} />}
      </div>
    </div>
  );
}