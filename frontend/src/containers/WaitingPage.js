import React from 'react';
import '../styles/App.scss';

import triangleImg from '../assets/triangle.svg';
import starImg from '../assets/star.svg';
import squareImg from '../assets/square.svg';
import circleImg from '../assets/circle.svg';

import waitingDesign from '../styles/WaitingPageDesign.module.scss';

import MatchInfo from '../components/MatchInfo.js';

const shapeImages = {
    triangle: triangleImg,
    star: starImg,
    square: squareImg,
    circle: circleImg,
  };

  

  // arrow function 
const WaitingPage = (props) =>  {
    
    const answerColor = localStorage.getItem("answerColor");
    console.log("WP", answerColor);
    
    var theshape;
    var thecolor;

    

    if(answerColor==="blue"){
        theshape = shapeImages.star;
        thecolor = "#01FFF4";
    } else if (answerColor==="pink"){
        theshape = shapeImages.circle;
        thecolor = "#FF1493";
    } else if (answerColor==="green"){
        theshape = shapeImages.square;
        thecolor = "#16FFBD";
    } else{
        theshape = shapeImages.triangle;
        thecolor = "#F9BD25";
        console.log(thecolor);
    }



    return (
        <div>
            <MatchInfo />            
            <div className={waitingDesign.centercontainer}>
                <div className={waitingDesign.waitingAsset} style={{background: thecolor}} >
                    Waiting...
                        <div className={waitingDesign.shapefix} >
                        <img src={theshape} alt='shape'  />
                        </div>
                </div>

            </div>

        </div>

    );
}
export default WaitingPage;