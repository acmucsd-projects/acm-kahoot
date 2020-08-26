import React from 'react';
import '../styles/App.scss';
//import styles from '../styles/AnswerPage.module.scss';

import MatchInfo from '../components/MatchInfo.js';
import PlayerAnswerButton from '../components/PlayerAnswerButton.js';


function AnswerPage() {
  return (
      <div>
        
            <MatchInfo />
            <PlayerAnswerButton />
      </div>
    

  );
}

export default AnswerPage;

