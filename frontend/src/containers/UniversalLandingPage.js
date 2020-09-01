import React from 'react';
import '../styles/App.scss';

import TheButtons from '../components/UniversalLandingPageButton';

import topDesign from '../assets/landingpagedesign.svg';
import skylineLeft from '../assets/nightlineLeft.svg';
import skylineRight from '../assets/nightlineRight.svg';

import landingpagedesign from '../styles/UniversalLandingPage.module.scss';

const designs = {
    top: topDesign,
    nightlineLeft: skylineLeft,
    nightlineRight: skylineRight
};

function UniversalLandingPage() {
    return (
        <div>
            <div className={landingpagedesign.title }>
                ACM QUIZTIME
            </div>
            <div className={landingpagedesign.topDesignLove }>
                <img src={designs.top} alt='top design'/>
            </div>
            <div>
            < TheButtons />
            </div>
              <div className={landingpagedesign.nightlineDesignLeft }>
                <img src={designs.nightlineLeft} alt='nightlineLeft'/>
            </div>
            <div className={landingpagedesign.nightlineDesignRight }>
                <img src={designs.nightlineRight} alt='nightlineRightt'/>
            </div>
        </div>
  
    );
  }
  
  export default UniversalLandingPage;