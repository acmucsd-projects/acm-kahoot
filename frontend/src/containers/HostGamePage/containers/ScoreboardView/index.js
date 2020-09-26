import React from 'react';

import styles from './styles.module.scss';
import Button from '../../../../components/Button';
import ScoreboardEntry from './components/ScoreboardEntry';
import MatchInfo from '../../../../components/MatchInfo';

export default function Scoreboard({ roomID, questionState, results, onAction }) {
    const entries = results.slice(0, 4).map((res, idx) => <ScoreboardEntry key={idx} ranking={idx+1} name={res.username} score={res.score} />);

    return (
        <div className={styles.container}>
            <MatchInfo roomID={roomID} numQuestion={questionState.number} />
            <div className={styles.header}>SCOREBOARD</div>
            <div className={styles.board}>
                <Button variant={styles.nextbutton} label="Next" onClick={onAction} />
                {entries}
            </div>
        </div>
    );
}