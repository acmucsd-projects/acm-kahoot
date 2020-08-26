import React from 'react';

import styles from '../styles/HostMenuView.module.scss';
import Button from '../components/Button';
import Title from '../components/Title';
import BlobLeft from '../assets/BlobLeft.svg';
import BlobRight from '../assets/BlobRight.svg';

function HostMenuView() {
  return (
    <div className={styles.HostMenuView}>
      <img className={styles.blobleft} src={BlobLeft} alt="" />
      <img className={styles.blobright} src={BlobRight} alt="" />
      <Title />
      <div className={styles.buttons}>
        <Button label='CREATE NEW GAME' />
        <Button label='MY GAMES' />
      </div>
    </div>
  );
}

export default HostMenuView;