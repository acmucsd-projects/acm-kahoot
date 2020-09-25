import React from 'react';
import '../styles/App.scss';
import styles from '../styles/EnterNicknamePage.module.scss';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';

function EnterNicknamePage(){
    let { code } = useParams();
    console.log(code);
    return(
        <div>
            <div className={styles.leftbox}>CODE: {code}</div>
            <div className={styles.rightbox}>ACM QUIZTIME</div>
            <div className={styles.container}>
                <div className={styles.header}>QUIZ NAME</div>
                <input type="text" placeholder="ENTER NICKNAME" size="7=8"></input>
                <Button variant={styles.enternicknamepagebutton} label="LET'S GO" />
            </div>
        </div>
    );
}

export default EnterNicknamePage;