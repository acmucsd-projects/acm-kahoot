import React from 'react';

import '../styles/MatchInfo.css';

function MatchInfo(props) {
  const gameCode = 123456;
  const userName = 'Appa';
  return (
    <div className='MatchInfo'>
      <div className='info-block'>
        <div>CODE: {gameCode}</div>
        <div>Name: {userName}</div>
      </div>
      <div className='info-block'>
        Q: # / 20
      </div>
    </div>
  );
}

export default MatchInfo;