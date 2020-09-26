import React from 'react';

import styles from './styles.module.scss';

export default function ScoreboardEntry(props) {
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