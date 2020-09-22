import React, { useEffect, useState } from 'react';

import styles from '../styles/DecksView.module.scss';
import { getPacks } from '../util/api';
import DeckList from '../components/DeckList';

export default function DecksView() {
  const [packs, setPacks] = useState([]);

  useEffect(() => {
    getPacks().then((packs) => {
      setPacks(packs);
    }).catch((e) => {
      console.warn(e);
    });
  }, []);

  return (
    <div className={styles.DecksView}>
      <div className={styles.header}>My Games</div>
      <DeckList packs={packs} />
    </div>
  );
}