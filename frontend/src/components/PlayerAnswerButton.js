import React from 'react';
import styles from '../styles/PlayerAnswerButton.module.scss';

import triangleImg from '../assets/triangle.svg';
import starImg from '../assets/star.svg';
import squareImg from '../assets/square.svg';
import circleImg from '../assets/circle.svg';


const shapeImages = {
    triangle: triangleImg,
    star: starImg,
    square: squareImg,
    circle: circleImg,
  };

function PlayerAnswerButton(){
    return (
        <div className={styles.AnswerGrid}> 
            <button className={styles.answerButtonBlueStarflex } >
                <img src={shapeImages.star} alt='star'  />
            </button>

            <button className={styles.answerButtonPinkCircleflex } >
                <img src={shapeImages.circle} alt='circle'  />
            </button>

            <button className={styles.answerButtonGreenSquareflex } >
                <img src={shapeImages.square} alt='square'  />
            </button>

            <button className={styles.answerButtonOrangeTriangleflex } >
                <img src={shapeImages.triangle} alt='triangle'  />
            </button>
       </div> 

    )
        
}
export default PlayerAnswerButton;