import React from 'react';

import styles from '../styles/QuestionEditHeader.module.scss';

function QuestionEditHeader(props) {
  return (
    <div className={styles.QuestionEditHeader}>
      <input className={styles.titleInput} type='input' placeholder='Enter deck title..' />
      <div>
        <button>1</button>
        <button>2</button>
      </div>
    </div>
  );
}

export default QuestionEditHeader;