import React from 'react';

import styles from './styles.module.scss';
import triangleImg from '../../../../../../../../assets/triangle.svg';
import starImg from '../../../../../../../../assets/star.svg';
import squareImg from '../../../../../../../../assets/square.svg';
import circleImg from '../../../../../../../../assets/circle.svg';

const shapeImages = {
  triangle: triangleImg,
  star: starImg,
  square: squareImg,
  circle: circleImg,
}

export default function AnswerCard({ shape, label, disabled }) {
  return (
    <div className={`${styles.AnswerCard} ${styles[shape]} ${disabled && styles.disabled}`}>
      <img
        className={styles.shape}
        src={shapeImages[shape]}
        alt=''
        height='100'
        width='100'
      />
      <div className={styles.label}>
        {label}
      </div>
    </div>
  );
}