import React from 'react';

import styles from '../styles/BarGraph.module.scss';
import Bar from './Bar';

function BarGraph(props) {
  return (
    <div className={styles.BarGraph}>
      <Bar shape='triangle' count='20' />
      <Bar shape='star' count='24' />
      <Bar shape='circle' count='9' />
      <Bar shape='square' count='3' />
    </div>
  );
}

export default BarGraph;