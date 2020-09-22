import React from 'react';
import styles from '../styles/PlayerAnswerButton.module.scss';

import triangleImg from '../assets/triangle.svg';
import starImg from '../assets/star.svg';
import squareImg from '../assets/square.svg';
import circleImg from '../assets/circle.svg';

import { Link } from 'react-router-dom';


const shapeImages = {
    triangle: triangleImg,
    star: starImg,
    square: squareImg,
    circle: circleImg,
  };

function PlayerAnswerButton(){

    const setWaitingColor = (color) => {
        localStorage.setItem("answerColor", color)
        
    }

    return (
        <div className={styles.AnswerGrid}> 

            <Link to="/answered">
                <button className={styles.answerButtonBlueStarflex } onClick={() => setWaitingColor("blue")} >
                    <img src={shapeImages.star} alt='star'  />
                </button>
            </Link>

            <Link to="/answered">
                <button className={styles.answerButtonPinkCircleflex } onClick={() => setWaitingColor("pink")} >
                    <img src={shapeImages.circle} alt='circle'  />
                </button>
            </Link>

            <Link to="/answered">
                <button className={styles.answerButtonGreenSquareflex } onClick={() => setWaitingColor("green")} >
                    <img src={shapeImages.square} alt='square'  />
                </button>
            </Link>

            <Link to="/answered">
                <button className={styles.answerButtonOrangeTriangleflex } onClick={() => setWaitingColor("orange")} >
                    <img src={shapeImages.triangle} alt='triangle'  />
                </button>

            </Link>
       </div> 

    )
        
}
export default PlayerAnswerButton;