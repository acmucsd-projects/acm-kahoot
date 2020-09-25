import React from 'react';
import '../styles/App.scss';

import styles from '../styles/IsCorrectCard.module.scss';


var rightorwrong;

const IsCorrectCard = ({ color, isCorrect }) =>  {

    if (isCorrect==="correct"){
        rightorwrong="CORRECT"
    } else{
        rightorwrong="WRONG"
    }

    return (     
            <div className={styles.centercontainer}>
                <div className={`${styles.waitingAsset} ${styles[rightorwrong]}`}>
                    {rightorwrong}!

                    <div className={styles.pointBox}>
                    + 0 pts
                    </div>
                </div>

                

            </div>
    );
}
export default IsCorrectCard;