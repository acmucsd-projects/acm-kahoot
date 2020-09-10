import React from 'react';

import styles from '../styles/HostEditView.module.scss';
import QuestionEditHeader from '../components/QuestionEditHeader';
import QuestionSidebar from '../components/QuestionSidebar';
import QuestionEditor from '../components/QuestionEditor';
import MoreQuestions from '../components/MoreQuestions';

function HostEditView() {

  return (
    <div className={styles.HostEditView}>
      <QuestionEditHeader />
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <QuestionSidebar />
        </div>
        <div className={styles.editor + ' ' + styles.scroller}>
          <QuestionEditor />
          {/* <MoreQuestions questions={[{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},{question: 'hi', answers: ['no', 'wow', 'hi', 'wow']},]}/> */}
        </div>
      </div>
    </div>
  );
}

export default HostEditView;