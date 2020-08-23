import React from 'react';

import styles from '../styles/QuestionSidebar.module.scss';
import QuestionList from './QuestionList';

function QuestionSidebar(props) {
  return (
    <div className={styles.QuestionSidebar}>
      <QuestionList />
      <div>
          <button>1</button>
          <button>2</button>
      </div>
    </div>
  );
}

export default QuestionSidebar;