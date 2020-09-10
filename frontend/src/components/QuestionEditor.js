import React from 'react';

import styles from '../styles/QuestionEditor.module.scss';
import AnswerCard from './AnswerCard';
import TimeLimit from './TimeLimit';
import Points from './Points';

export default function QuestionEditor({ question }) {
  // const questionNum = useState(question.number);
  // const question = useState(question.question);
  // const points = useState()

  return (
    <div className={styles.QuestionEditor}>
      <div className={styles.top}>
        Question 1 out of 3
      </div>
      <div className={styles.mid}>
        <input className={styles.question} type='text' placeholder='Enter Question...' />
        <div className={styles.settings}>
          {/* time limit */}
          <TimeLimit />
          {/* points */}
          <Points />
        </div>
      </div>
      <div className={styles.answers}>
        <AnswerCard shape='triangle' text='This is an answer.' />
        <AnswerCard shape='star' text='This is an answer.' />
        <AnswerCard shape='circle' text='This is an answer.' />
        <AnswerCard shape='square' text='This is an answer.' />
      </div>
    </div>
  );
}