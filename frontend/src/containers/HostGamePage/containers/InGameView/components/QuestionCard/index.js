import React, { useState } from 'react';

import styles from './styles.module.scss';
import triangleImg from '../../../../assets/triangle.svg';
import starImg from '../../../../assets/star.svg';
import squareImg from '../../../../assets/square.svg';
import circleImg from '../../../../assets/circle.svg';

const shapeImages = {
  triangle: triangleImg,
  star: starImg,
  square: squareImg,
  circle: circleImg,
}

export default function QuestionCard(props) {
  const [isVisible, setVisible] = useState(true);
  const [isShort, setShort] = useState(false);

  let decoration;
  if (props.shape) {
    decoration = <img className={styles.shape} src={shapeImages[props.shape]} alt='' height='100' width='100' />;
  } else {
    decoration = <div className={styles.number}><div>12</div></div>;
  }

  if (isVisible) {
    return (
      <div className={`${styles.QuestionCard} ${styles[props.shape] || styles.default} ${isShort && styles.short}`}
          onClick={() => setShort(true)}
          onAnimationEnd={(event) => setVisible(true)}>
        {decoration}
        <div className={styles.label}>This is the question.</div>
      </div>
    );
  }

  return null;
}