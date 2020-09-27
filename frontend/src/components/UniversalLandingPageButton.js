import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/UniversalLandingPageButton.module.scss';

export default function UniversalLandingPageButton() {
    return(
        <div>
            <div class={styles.container}>
                <Link to="/player">
                    <button className={styles.playerButton}>
                        <div className={styles.textStyle}>
                            Player
                        </div>
                    </button>
                </Link>
                <Link to="/host">
                    <button className={styles.hostButton}>
                        <div className={styles.textStyle}>
                            Host
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
}
