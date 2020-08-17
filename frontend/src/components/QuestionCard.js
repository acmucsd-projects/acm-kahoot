import React from 'react';

import '../styles/QuestionCard.css';

function QuestionCard(props) {
  return (
    <div className='QuestionCard'>
      {/* TODO: Add question number-circle */}
      <div style={{ 'border-radius': '100%', color: '#FFF', 'background-color': '#27163F', height: '100px', width: '100px' }}>12</div>
      <div className='QuestionLabel' style={{ width: '80%' }}>This is the question.</div>
    </div>
  );
}

export default QuestionCard;