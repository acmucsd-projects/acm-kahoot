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

function PlayerAnswerButton({ onAnswerClick, onCorrectClick }){

    // const setWaitingColor = (color) => {
    //     localStorage.setItem("answerColor", color)
    // }

    return (
        <div className={styles.AnswerGrid}>
            <button className={styles.answerButtonBlueStarflex } onClick={() => {onAnswerClick("blue"); onCorrectClick("correct")}}  >
                <img src={shapeImages.star} alt='star'  />
            </button>

            <button className={styles.answerButtonPinkCircleflex } onClick={() => {onAnswerClick("pink"); onCorrectClick("wrong")}} >
                <img src={shapeImages.circle} alt='circle'  />
            </button>

            <button className={styles.answerButtonGreenSquareflex } onClick={() => {onAnswerClick("green"); onCorrectClick("wrong")}} >
                <img src={shapeImages.square} alt='square'  />
            </button>

            <button className={styles.answerButtonOrangeTriangleflex } onClick={() => {onAnswerClick("orange"); onCorrectClick("wrong")}} >
                <img src={shapeImages.triangle} alt='triangle'  />
            </button>
       </div> 
    )
        
}
export default PlayerAnswerButton;