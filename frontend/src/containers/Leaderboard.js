import React from 'react';
import '../styles/App.scss';
import styles from '../styles/Leaderboard.module.scss';
import Button from '../components/Button';

function Leaderboard(){
    return (
        <div>
            <div className={styles.header}>QUIZ NAME</div>
            <Button variant={styles.finishbutton} label="Finish" />
            <div className={styles.firstplace}>
                <div className={styles.name}>Jim Crow</div>
                <div className={styles.purplecircle}>1</div>
                <div className={styles.score}>1000</div>
                <div className={styles.correctanswers}>9 out of 10</div>
            </div>
            <div className={styles.secondplace}>
                <div className={styles.name}>John Doe</div>
                <div className={styles.purplecircle}>2</div>
                <div className={styles.score}>999</div>
                <div className={styles.correctanswers}>7 out of 10</div>
            </div>
            <div className={styles.thirdplace}>
                <div className={styles.name}>Joe Mama</div>
                <div className={styles.purplecircle}>3</div>
                <div className={styles.score}>500</div>
                <div className={styles.correctanswers}>5 out of 10</div>
            </div>
        </div>
    );
}

export default Leaderboard;