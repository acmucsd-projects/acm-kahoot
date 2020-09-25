import React from 'react';

import styles from './styles.module.scss';

function Button(props) {
  return (
    <button className={styles[props.variant] || styles.Button}>
      {props.label}
    </button>
  );
}

export default Button;
