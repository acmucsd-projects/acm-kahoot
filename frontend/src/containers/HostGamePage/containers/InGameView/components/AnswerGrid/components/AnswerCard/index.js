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

export default function AnswerCard(props) {
  return (
    <div className={`${styles.AnswerCard} ${styles[props.shape]} ${props.disabled && styles.disabled}`}>
      <img
        className={styles.shape}
        src={shapeImages[props.shape]}
        alt=''
        height='100'
        width='100'
      />
      <div className={styles.label}>This is an answer.</div>
    </div>
  );
}