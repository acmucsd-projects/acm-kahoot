import React from 'react';
import '../styles/EnterNicknamePage.module.scss';
import '../styles/GameCodePage.module.scss';
import '../styles/Scoreboard.module.scss';

function Button(props) {
  return (
    <button className={props.variant}>
      {props.label}
    </button>
  );
}

export default Button;
