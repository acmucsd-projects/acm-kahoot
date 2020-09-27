import React from 'react';

import landingpagedesign from '../styles/UniversalLandingPage.module.scss';
import TheButtons from '../components/UniversalLandingPageButton';
import topDesign from '../assets/landingpagedesign.svg';
import skylineLeft from '../assets/nightlineLeft.svg';
import skylineRight from '../assets/nightlineRight.svg';

const designs = {
    top: topDesign,
    nightlineLeft: skylineLeft,
    nightlineRight: skylineRight
};

export default function UniversalLandingPage() {
    return (
        <div>
            <img className={landingpagedesign.topDesignLove} src={designs.top} alt='top design' />
            <div className={landingpagedesign.nightlineDesignLeft}>
                <img src={designs.nightlineLeft} alt='nightlineLeft' />
            </div>
            <div className={landingpagedesign.nightlineDesignRight}>
                <img src={designs.nightlineRight} alt='nightlineRightt' />
            </div>
            <div>
                <TheButtons />
            </div>
            <div className={landingpagedesign.title}>
                ACM QUIZTIME
            </div>
        </div>
    );
}