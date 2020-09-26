import React from 'react';

import styles from './styles.module.scss';
import Button from '../../../../components/Button';

export default function LeaderboardView({ pack, results, onAction }) {
    const topResults = results.slice(0, 3);

    return (
        <div className={styles.container}>
            <div className={styles.header}>RESULTS</div>
            <Button variant={styles.finishbutton} label="Finish" onClick={onAction} />
            <div className={styles.places}>
                <div className={styles.firstplace}>
                    <div className={styles.name}>{topResults[0] ? topResults[0].username : ''}</div>
                    <div className={styles.purplecircle}>1</div>
                    <div className={styles.score}>{topResults[0] ? topResults[0].score : null}</div>
                    {/* <div className={styles.correctanswers}>9 out of 10</div> */}
                </div>
                <div className={styles.secondplace}>
                    <div className={styles.name}>{topResults[1] ? topResults[1].username : ''}</div>
                    <div className={styles.purplecircle}>2</div>
                    <div className={styles.score}>{topResults[1] ? topResults[1].score : null}</div>
                    {/* <div className={styles.correctanswers}>7 out of 10</div> */}
                </div>
                <div className={styles.thirdplace}>
                    <div className={styles.name}>{topResults[2] ? topResults[2].username : ''}</div>
                    <div className={styles.purplecircle}>3</div>
                    <div className={styles.score}>{topResults[2] ? topResults[2].score : null}</div>
                    {/* <div className={styles.correctanswers}>5 out of 10</div> */}
                </div>
            </div>
        </div>
    );
}