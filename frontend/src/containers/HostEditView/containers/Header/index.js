import React, { useState } from 'react';

import styles from './styles.module.scss';
import DualButton from '../../../../components/DualButton';
import { useHistory } from 'react-router-dom';

export default function QuestionEditHeader({ name = '', onChange, onSubmit }) {
  const history = useHistory();
  const [curName, setName] = useState(name);

  const handleExit = () => {
    history.goBack();
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (onChange) onChange(e.target.value);
  }

  return (
    <div className={styles.QuestionEditHeader}>
      <input className={styles.titleInput} type='input' placeholder='Enter a deck title..' value={curName} onChange={handleNameChange} />
      <div className={styles.buttons}>
        <DualButton left='EXIT' onClickLeft={handleExit} right='FINISH' onClickRight={onSubmit} large />
      </div>
    </div>
  );
}