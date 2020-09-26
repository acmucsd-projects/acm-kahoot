import React from 'react';

import styles from './styles.module.scss';

export default function QuestionNumberView({ numQuestion }) {
  return (
    <div>
      <div className={styles.centercontainer }>
        <div className={styles.toporange}></div>
        <div className={styles.bottomgreen}></div> 
      </div>
      <div className={styles.leftblue}></div>
      <div className={styles.rightpink}></div>
      <div className={styles.title}>
        Question {numQuestion}
      </div>
    </div>
  );
}