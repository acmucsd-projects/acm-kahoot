import React from 'react';
import styles from '../styles/UniversalLandingPageButton.module.scss';
import { Link } from 'react-router-dom';



function UniversalLandingPageButton(){
    return(
        <div>
            <Link to="/player">
                <button className={styles.playerButton } >
                    <div className={styles.textStyle }>
                        Player
                    </div>            
                </button>    
            </Link>    
            
            <Link to="/host">
                <button className={styles.hostButton } >
                    <div className={styles.textStyle }>
                        Host
                    </div>                
                </button>
            </Link>
        </div>
    ) 

}
export default UniversalLandingPageButton;
