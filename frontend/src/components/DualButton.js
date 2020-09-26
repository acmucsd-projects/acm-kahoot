import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from '../styles/DualButton.module.scss';

function Button(props) {
  const history = useHistory();

  function handleClickLeft() {
    if (props.leftTo) history.push(props.leftTo);
  }

  function handleClickRight() {
    if (props.rightTo) history.push(props.rightTo);
  }

  return (
    <div className={styles.DualButton}>
      <button className={styles.left} onClick={handleClickLeft}>
        {props.left}
      </button>
      <button className={styles.right} onClick={handleClickRight}>
        {props.right}
      </button>
    </div>
  );
}

export default Button;