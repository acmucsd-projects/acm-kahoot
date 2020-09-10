import React, { useState } from 'react';

import styles from '../styles/Points.module.scss';

export default function Points() {
  const [selected, setSelected] = useState(1);

  const setStyle = (sel) => {
    if (selected === sel) return styles.selected;
    return '';
  }

  const handleClick = (sel) => {
    setSelected(sel);
  }

  return (
    <div className={styles.Points}>
      Points
      <div className={styles.choices}>
        <button className={`${styles.choice} ${setStyle(1)}`} onClick={() => handleClick(1)}>0</button>
        <button className={`${styles.choice} ${setStyle(2)}`} onClick={() => handleClick(2)}>1000</button>
        <button className={`${styles.choice} ${setStyle(3)}`} onClick={() => handleClick(3)}>2000</button>
      </div>
    </div>
  );
}