import React, { useState, useEffect } from 'react';

import styles from '../styles/QuestionEditor.module.scss';
import TimeLimit from './TimeLimit';
import Points from './Points';
import AnswerEditCard from './AnswerEditCard';

export default function QuestionEditor({ question }) {
  const [name, setName] = useState(question.question);
  const [time, setTime] = useState(question.time);
  const [points, setPoints] = useState(question.points);

  useEffect(() => {
    setName(question.question);
    setTime(question.time);
    setPoints(question.points);
  }, [question]);

  const handleQuestionChange = (e) => {
    setName(e.target.value);
    question.question = e.target.value;
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    question.time = e.target.value;
  };
  
  const handlePointsChange = (points) => {
    setPoints(points);
    question.points = points;
  };

  return (
    <div className={styles.QuestionEditor}>
      <div className={styles.top}>
        {/* Question {} out of {} */}
      </div>
      <div className={styles.mid}>
        <textarea className={`${styles.question} ${styles.scroller}`} placeholder='Enter question...' value={name} onChange={handleQuestionChange} />
        <div className={styles.settings}>
          <TimeLimit time={time} onChange={handleTimeChange} />
          <Points points={points} onChange={handlePointsChange} />
        </div>
      </div>
      <div className={styles.answers}>
        <AnswerEditCard shape='triangle' answer={question.answers[0]} />
        <AnswerEditCard shape='star' answer={question.answers[1]} />
        <AnswerEditCard shape='circle' answer={question.answers[2]} />
        <AnswerEditCard shape='square' answer={question.answers[3]} />
      </div>
    </div>
  );
}