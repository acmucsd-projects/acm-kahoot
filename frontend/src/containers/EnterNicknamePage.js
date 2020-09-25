import React from 'react';
import '../styles/App.scss';
import styles from '../styles/EnterNicknamePage.module.scss';
import Button from '../components/Button';

function EnterNicknamePage(){
    return(
        <div>
            <div className={styles.leftbox}>CODE: XXX-XXX</div>
            <div className={styles.rightbox}>ACM QUIZTIME</div>
            <div className={styles.container}>
                <div className={styles.header}>QUIZ NAME</div>
                <input type="text" placeholder="ENTER NICKNAME" size="7=8"></input>
                <Button variant="enternicknamepagebutton" label="LET'S GO" />
            </div>
        </div>
    );
}

export default EnterNicknamePage;