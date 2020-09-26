
import React, { useState } from 'react';

import styles from './styles.module.scss';
import BlobTopLeft from '../../assets/Blob_TopLeft.svg';
import BlobTopRight from '../../assets/Blob_TopRight.svg';
import BlobBottomLeft from '../../assets/Blob_BottomLeft.svg';
import BlobBottomRight from '../../assets/Blob_BottomRight.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

export default function GameCodePage() {
    const [code, setCode] = useState(0);

    let handleChange = event => {
        setCode(event.target.value);
        //alert(code);
    };

    return(
        <div>
            <img className={styles.blobtopleft} src={BlobTopLeft} alt="" />
            <img className={styles.blobtopright} src={BlobTopRight} alt="" />
            <img className={styles.blobbottomleft} src={BlobBottomLeft} alt="" />
            <img className={styles.blobbottomright} src={BlobBottomRight} alt="" />
            <div className={styles.container}>
                <div className={styles.header}>ACM QUIZTIME</div>
                <input
                    type="text"
                    placeholder="Game Code"
                    size="7=8"
                    //onChange={() => setCode(event.target.value)}
                    onChange={handleChange}>
                </input>
                <Link to={`/player/room/${code}`}>
                    <Button
                        variant={styles.gamecodepagebutton}
                        label='ENTER'  
                    />
                </Link>
            </div>
        </div>
    );
}