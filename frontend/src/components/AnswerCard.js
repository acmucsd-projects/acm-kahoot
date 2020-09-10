import React from 'react';

import styles from '../styles/AnswerCard.module.scss';
import triangleImg from '../assets/triangle.svg';
import starImg from '../assets/star.svg';
import squareImg from '../assets/square.svg';
import circleImg from '../assets/circle.svg';

const shapeImages = {
  triangle: triangleImg,
  star: starImg,
  square: squareImg,
  circle: circleImg,
}

function AnswerCard({ shape, text, disabled = false, children }) {
  return (
    <div className={`${styles.AnswerCard} ${styles[shape]} ${disabled && styles.disabled}`}>
      <img
        className={styles.shape}
        src={shapeImages[shape]}
        alt=''
        height='100'
        width='100'
      />
      <div className={styles.label}>{text}</div>
      {children}
    </div>
  );
}

export default AnswerCard;