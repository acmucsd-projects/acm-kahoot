import React, { useState, useEffect } from 'react';

import styles from '../styles/AnswerEditCard.module.scss';
import triangleImg from '../assets/triangle.svg';
import starImg from '../assets/star.svg';
import squareImg from '../assets/square.svg';
import circleImg from '../assets/circle.svg';
import Switch from '../components/Switch';

const shapeImages = {
  triangle: triangleImg,
  star: starImg,
  square: squareImg,
  circle: circleImg,
}

export default function AnswerEditCard({ shape, answer }) {
  const [curText, setText] = useState('');
  const [isCorrect, setCorrect] = useState(false);

  useEffect(() => {
    setText(answer.text);
    setCorrect(answer.isCorrect);
  }, [answer]);

  const handleChangeText = (e) => {
    setText(e.target.value);
    answer.text = e.target.value;
  };

  const handleChangeCorrect = (isCorrect) => {
    setCorrect(isCorrect);
    answer.isCorrect = isCorrect;
  };

  return (
    <div className={`${styles.card} ${styles[shape]}`}>
      <img
        className={styles.shape}
        src={shapeImages[shape]}
        alt=''
        height='100'
        width='100'
      />
      <textarea className={styles.text} value={curText} onChange={handleChangeText} />
      <div className={styles.button}>
        <Switch value={isCorrect} onChange={handleChangeCorrect} />
      </div>
    </div>
  );
}