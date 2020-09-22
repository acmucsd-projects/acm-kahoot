import React from 'react';

import styles from './styles.module.scss';
import Bar from './components/Bar';

export default function BarGraph() {
  return (
    <div className={styles.BarGraph}>
      <Bar shape='triangle' count='20' />
      <Bar shape='star' count='24' />
      <Bar shape='circle' count='9' />
      <Bar shape='square' count='3' />
    </div>
  );
}