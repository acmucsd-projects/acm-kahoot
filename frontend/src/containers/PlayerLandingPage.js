import React from 'react';
import '../styles/App.scss';
import styles from '../styles/PlayerLandingPage.module.scss';
import BlobLeft from '../assets/BlobLeft.svg';
import BlobRight from '../assets/BlobRight.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function LandingPage() {
    return( 
        <div>
            <img className={styles.blobleft} src={BlobLeft} alt="" />
            <img className={styles.blobright} src={BlobRight} alt="" />
            <div className={styles.container}>
                <div className={styles.header}>ACM QUIZTIME</div>
                <Link to="/enter-code">
                    <Button variant={styles.landingpagebutton} label='PLAY' />
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;