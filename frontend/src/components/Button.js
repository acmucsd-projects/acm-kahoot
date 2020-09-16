import React from 'react';
//import styles from '../styles/Button.module.scss';
import styles from '../styles/LandingPage.module.scss';

function Button(props) {
  return (
    <button className={styles[props.variant]}>
      {props.label}
    </button>
  );
}

export default Button;
