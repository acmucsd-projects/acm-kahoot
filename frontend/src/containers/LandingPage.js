import React from 'react';
import '../styles/App.scss';
import styles from '../styles/LandingPage.module.scss';
import BlobLeft from '../assets/BlobLeft.svg';
import BlobRight from '../assets/BlobRight.svg';

function LandingPage() {
    return(
        <div>
            <div className={styles.header}>HELLO THERE</div>
            <img className={styles.blobleft} src={BlobLeft} alt="" />
            <img className={styles.blobright} src={BlobRight} alt="" />
            {/* <img src={BlobLeft} alt="" />
            <img src={BlobRight} alt="" /> */}
            
        </div>
    );
}

export default LandingPage;