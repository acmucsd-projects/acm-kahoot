import React from 'react';

import styles from '../styles/Switch.module.scss';

export default function Switch({ value, onChange }) {
  function getStyle(sel) {
    if (sel === value) return styles.selected;
    return '';
  }

  function handleClickTop() {
    if (onChange) onChange(true);
  }

  function handleClickBottom() {
    if (onChange) onChange(false);
  }

  return (
    <div className={styles.container}>
      <button className={`${styles.top} ${getStyle(true)}`} onClick={handleClickTop}>
        ✔
      </button>
      <button className={`${styles.bottom} ${getStyle(false)}`} onClick={handleClickBottom}>
        ✖
      </button>
    </div>
  );
}