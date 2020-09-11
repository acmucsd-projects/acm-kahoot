import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';

// Change these to change the available point options.
const options = [0, 1000, 2000];
const defaultPoints = options[1];

export default function Points({ points, onChange }) {
  const [curPoints, setPoints] = useState(points || defaultPoints)

  useEffect(() => {
    setPoints(points);
  }, [points]);

  // Used to track which option is selected.
  const getStyle = (optionNum) => {
    if (options[optionNum-1] === curPoints) return styles.selected;
    return '';
  }

  const handleClick = (points) => {
    setPoints(points);
    if (onChange) onChange(points);
  }

  return (
    <div className={styles.Points}>
      Points
      <div className={styles.choices}>
        {/* Map each point option to a button. */}
        {options.map((points, idx) => <button key={idx} className={`${styles.choice} ${getStyle(idx+1)}`} onClick={() => handleClick(points)}>{points}</button>)}
      </div>
    </div>
  );
}