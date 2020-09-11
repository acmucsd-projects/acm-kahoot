import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from '../styles/DualButton.module.scss';

export default function DualButton({ left, leftTo, onClickLeft, right, rightTo, onClickRight, large = false }) {
  const history = useHistory();

  function handleClickLeft() {
    if (leftTo) history.push(leftTo);
    if (onClickLeft) onClickLeft();
  }

  function handleClickRight() {
    if (rightTo) history.push(rightTo);
    if (onClickLeft) onClickRight();
  }

  const sizeStyle = large ? styles.large : '';

  return (
    <div className={styles.DualButton}>
      <button className={styles.left + ' ' + sizeStyle} onClick={handleClickLeft}>
        {left}
      </button>
      <button className={styles.right + ' ' + sizeStyle} onClick={handleClickRight}>
        {right}
      </button>
    </div>
  );
}