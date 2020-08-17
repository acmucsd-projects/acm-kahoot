import React from 'react';

import '../styles/AnswerGrid.css';
import AnswerCard from '../components/AnswerCard';

function AnswerGrid(props) {
  return (
    <div className='AnswerGrid'>
      <AnswerCard shape='triangle' />
      <AnswerCard shape='star' />
      <AnswerCard shape='circle' />
      <AnswerCard shape='square' />
    </div>
  );
}

export default AnswerGrid;