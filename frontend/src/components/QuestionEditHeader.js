import React from 'react';

import styles from '../styles/QuestionEditHeader.module.scss';
import DualButton from '../components/DualButton';

export default function QuestionEditHeader(props) {
  return (
    <div className={styles.QuestionEditHeader}>
      <input className={styles.titleInput} type='input' placeholder='Enter deck title..' />
      <div className={styles.buttons}>
        <DualButton left='EXIT' leftTo='/' right='FINISH' rightTo='/' large />
      </div>
    </div>
  );
}