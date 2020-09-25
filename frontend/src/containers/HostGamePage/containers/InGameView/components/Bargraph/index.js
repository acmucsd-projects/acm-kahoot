import React from 'react';

import styles from './styles.module.scss';
import Bar from './components/Bar';

const maxHeight = 200;
const shapes = ['triangle', 'star', 'circle', 'square'];

export default function BarGraph({ stats = [] }) {
  const bars = stats.counts.map((count, idx) => <Bar key={idx} shape={shapes[idx]} count={count} height={(count / stats.total) * maxHeight} />);

  return (
    <div className={styles.container}>
      {bars}
    </div>
  );
}