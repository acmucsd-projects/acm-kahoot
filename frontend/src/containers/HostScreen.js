import React from 'react';

import '../styles/HostScreen.css';
import MatchInfo from '../components/MatchInfo';
import AnswerGrid from '../components/AnswerGrid';
import QuestionCard from '../components/QuestionCard';
import BarGraph from '../components/BarGraph';

function HostScreen() {
  return (
    <div className="HostScreen">
      <MatchInfo />
      {/* <QuestionCard /> */}
      <div className="question-stats">
        <BarGraph />
        <AnswerGrid />
      </div>
    </div>
  );
}

export default HostScreen;