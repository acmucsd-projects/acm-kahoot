import React from 'react';

import styles from './styles.module.scss';
import Bar from './components/Bar';

const maxHeight = 200;

export default function BarGraph({ stats = [] }) {
  return (
    <div className={styles.BarGraph}>
      <Bar shape='triangle' count={stats[1]} height={maxHeight / stats[1]} />
      <Bar shape='star' count={stats[2]} height={maxHeight / stats[2]} />
      <Bar shape='circle' count={stats[3]} height={maxHeight / stats[3]} />
      <Bar shape='square' count={stats[4]} height={maxHeight / stats[4]} />
    </div>
  );
}