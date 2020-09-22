import React from 'react';
//import styles from '../styles/Button.module.scss';
import '../styles/PlayerLandingPage.module.scss';
import '../styles/GameCodePage.module.scss';
import '../styles/EnterNicknamePage.module.scss';


function Button(props) {
  return (
    <button className={props.variant}>
      {props.label}
    </button>
  );
}

export default Button;
