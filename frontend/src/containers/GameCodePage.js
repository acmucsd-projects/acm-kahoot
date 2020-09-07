import React from 'react';
import '../styles/App.scss';
import styles from '../styles/GameCodePage.module.scss';
import BlobTopLeft from '../assets/Blob_TopLeft.svg';
import BlobTopRight from '../assets/Blob_TopRight.svg';
import BlobBottomLeft from '../assets/Blob_BottomLeft.svg';
import BlobBottomRight from '../assets/Blob_BottomRight.svg';

function GameCodePage() {
    return(
        <div>
            <img className={styles.blobtopleft} src={BlobTopLeft} alt="" />
            <img className={styles.blobtopright} src={BlobTopRight} alt="" />
            <img className={styles.blobbottomleft} src={BlobBottomLeft} alt="" />
            <img className={styles.blobbottomright} src={BlobBottomRight} alt="" />
        </div>
    );
}

export default GameCodePage;