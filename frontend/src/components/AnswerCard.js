import React from 'react';

import '../styles/AnswerCard.css';
import triangleImg from '../assets/triangle.svg';
import starImg from '../assets/star.svg';
import squareImg from '../assets/square.svg';
import circleImg from '../assets/circle.svg';

const answerShapes = {
  triangle: triangleImg,
  star: starImg,
  square: squareImg,
  circle: circleImg,
}

function AnswerCard(props) {
  return (
    <div className={'AnswerCard ' + props.shape}>
      <img
        className='AnswerCardShape'
        src={answerShapes[props.shape]}
        alt='asf'
        height='100'
        width='100'
      />
      <div className='AnswerLabel'>This is an answer.</div>
    </div>
  );
}

export default AnswerCard;