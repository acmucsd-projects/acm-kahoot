import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/HostMenuView.module.scss';
import Button from '../components/Button';
import Title from '../components/Title';
import BlobLeft from '../assets/BlobLeft.svg';
import BlobRight from '../assets/BlobRight.svg';

function HostMenuView() {
  return (
    <div className={styles.HostMenuView}>
      <img draggable='false' className={styles.blobleft} src={BlobLeft} alt="" />
      <img draggable='false' className={styles.blobright} src={BlobRight} alt="" />
      <Title />
      <div className={styles.buttons}>
        <Link to='/host/edit/new' draggable='false'>
          <Button label='CREATE NEW GAME' />
        </Link>
        <Link to='/host/decks' draggable='false'>
          <Button label='MY GAMES' />
        </Link>
      </div>
    </div>
  );
}

export default HostMenuView;