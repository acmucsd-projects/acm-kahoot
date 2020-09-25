import React from 'react';
import '../styles/App.scss';
import styles from '../styles/Scoreboard.module.scss';

function ScoreboardEntry(props){
    return(
        <div>
            <div className={styles.entry}>
                <div className={styles.ranking}>{props.ranking}</div>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.score}>{props.score}</div>
            </div>
        </div>
    );
}

export default ScoreboardEntry;