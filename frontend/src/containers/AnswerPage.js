import React, { useState, useEffect } from 'react';
import socketIO from 'socket.io-client';
import '../styles/App.scss';
//import styles from '../styles/AnswerPage.module.scss';

import MatchInfo from '../components/MatchInfo.js';
import WaitingCard from '../components/WaitingCard';
import PlayerAnswerButton from '../components/PlayerAnswerButton.js';

import IsCorrectCard from '../components/IsCorrectCard.js';

const ENDPOINT = 'https://localhost:3000';
let socket;

export default function AnswerPage() {
  const [isLoadingQuestion, setLoading] = useState(true);

  //hooks
  const [answer, setAnswer] = useState('');

  const [correct, setCorrect] = useState('');
  const [gameState, setGameState] = useState(0);
  // 0 -> answering (4 answers page)
  // 1 -> waiting page
  // 2 -> results page
  // 3 -> scoreboard

  useEffect(() => {
    socket = socket || socketIO(ENDPOINT);

    socket.on('showResults', (answer) => {
      //change setcorrect to true or false instead of string.
      setCorrect(answer.correct);
      setGameState(2);
    });

    socket.on('event', () => {
      // change blue
    });

    return () => socket.disconnect();
  }, []);

  const handleAnswerClick = (color) => {
    setAnswer(color);
    setGameState(1);
    socket.emit('answerQuestion', questions.answers[0]);
  };

  const handleCorrectClick = (isCorrect) => {
    setCorrect(isCorrect);
  };

  let content = <div></div>;
  if (gameState === 0) {
    content = (
      <div>
        <MatchInfo />
        <PlayerAnswerButton onAnswerClick={handleAnswerClick} />

        {/* { correct ? <IsCorrectCard color={answer} isCorrect={correct}/> : <PlayerAnswerButton onAnswerClick={handleAnswerClick} onCorrectClick={handleCorrectClick} /> } */}
      </div>
    );
  } else if (gameState === 1) {
    content = (
      <div>
        <MatchInfo />
        <WaitingCard color={answer} />
      </div>
    );
  } else if (gameState === 2) {
    content = (
      <div>
        <MatchInfo />
        <IsCorrectCard color={answer} isCorrect={correct}/>;
      </div>
    );
  }
  

  return content;
}