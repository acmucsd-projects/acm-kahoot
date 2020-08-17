import React from 'react';

import '../styles/BarGraph.css';
import Bar from './Bar';

function BarGraph(props) {
  return (
    <div className='BarGraph'>
      <Bar shape='triangle' count='20' />
      <Bar shape='star' count='24' />
      <Bar shape='circle' count='9' />
      <Bar shape='square' count='3' />
    </div>
  );
}

export default BarGraph;