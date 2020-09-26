import React from 'react';

import styles from '../styles/Button.module.scss';

function Button(props) {
  return (
    <button className={props.variant || styles.Button} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;