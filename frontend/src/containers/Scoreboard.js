import React from 'react';
import '../styles/App.scss';
import styles from '../styles/Scoreboard.module.scss';
import Button from '../components/Button';
import ScoreboardEntry from '../components/ScoreboardEntry.js';

function Scoreboard(){
    return(
        <div>
            <div className={styles.header}>SCOREBOARD</div>
            <div className={styles.board}>
                <Button variant={styles.nextbutton} label="Next" />
                <ScoreboardEntry ranking={1} name="Jim Crow" score={1000} />
                <ScoreboardEntry ranking={2} name="John Doe" score={999} />
                <ScoreboardEntry ranking={3} name="Joe Mama" score={500} />
                <ScoreboardEntry ranking={4} name="Hugh Jabutt" score={69} />
                <ScoreboardEntry ranking={5} name="Jane Doe" score={42} />
            </div>
        </div>
    );
}

export default Scoreboard;