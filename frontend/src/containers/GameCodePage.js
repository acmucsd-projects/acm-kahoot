import React, { useState } from 'react';
import '../styles/App.scss';
import styles from '../styles/GameCodePage.module.scss';
import BlobTopLeft from '../assets/Blob_TopLeft.svg';
import BlobTopRight from '../assets/Blob_TopRight.svg';
import BlobBottomLeft from '../assets/Blob_BottomLeft.svg';
import BlobBottomRight from '../assets/Blob_BottomRight.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function GameCodePage() {

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
                {/* <div className={styles.header}>[insert the input form here]</div> */}
                {/* <form>
                    <label>
                        <input type="text" />
                    </label>
                    <input type="submit" />
                </form> */}
                {/* <form>
                    <label className={styles.input}>
                        yeet somethin in here
                        <input type="text" />
                    </label>
                </form> */}
                <input
                    type="text"
                    placeholder="Game Code"
                    size="7=8"
                    //onChange={() => setCode(event.target.value)}
                    onChange={handleChange}>
                </input>
                <Link to={"/enter-nickname/" + code}>
                    <Button
                        variant={styles.gamecodepagebutton}
                        label='ENTER'  
                    />
                </Link>
            </div>
        </div>
    );
}

export default GameCodePage;