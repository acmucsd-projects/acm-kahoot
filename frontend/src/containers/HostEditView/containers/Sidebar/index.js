import React from 'react';

import styles from './styles.module.scss';
import QuestionList from './containers/QuestionList';

function QuestionSidebar({ questions, onChange }) {
  return (
    <div className={styles.QuestionSidebar}>
      <QuestionList questions={questions} onChange={onChange} />
      <div>
          <button>1</button>
          <button>2</button>
      </div>
    </div>
  );
}

export default QuestionSidebar;