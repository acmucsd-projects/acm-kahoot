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
};

export default function PlayerAnswerButton({ shape, onClick }) {
  return (
    <button className={`${styles.button} ${styles[shape]}`} onClick={onClick}>
      <img src={shapeImages[shape]} alt='' />
    </button>
  );
}