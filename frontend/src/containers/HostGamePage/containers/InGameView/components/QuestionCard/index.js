import React from 'react';

import styles from './styles.module.scss';
import triangleImg from '../../../../../../assets/triangle.svg';
import starImg from '../../../../../../assets/star.svg';
import squareImg from '../../../../../../assets/square.svg';
import circleImg from '../../../../../../assets/circle.svg';

const shapeImages = {
  triangle: triangleImg,
  star: starImg,
  square: squareImg,
  circle: circleImg,
}

export default function QuestionCard({ shape, time, question, showAnswer }) {
  let decoration;
  if (shape) {
    decoration = <img className={styles.shape} src={shapeImages[shape]} alt='' height='100' width='100' />;
  } else {
    decoration = <div className={styles.number}><div>{time}</div></div>;
  }

  return (
    <div className={`${styles.QuestionCard} ${styles[shape] || styles.default} ${showAnswer && styles.short}`}>
      {decoration}
      <div className={styles.label}>
        {question}
      </div>
    </div>
  );
}