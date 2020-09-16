import React from 'react';
import styles from '../styles/EnterNicknamePage.module.scss';

function Button(props) {
  return (
    <button>
      <button className={styles[props.variant]}>
        {props.label}
      </button>
    </button>
  );
}

export default Button;
