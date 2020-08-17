import React from 'react';

import '../styles/Bar.css';

function Bar(props) {
  return (
    <div className='Bar'>
      <div>{props.count}</div>
      <div className={`box ${props.shape}`}></div>
    </div>
  );
}

export default Bar;