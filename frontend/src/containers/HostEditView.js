import React from 'react';

import styles from '../styles/HostEditView.module.scss';
import QuestionEditHeader from '../components/QuestionEditHeader';
import QuestionSidebar from '../components/QuestionSidebar';
import QuestionEditor from '../components/QuestionEditor';

function HostEditView() {
  return (
    <div className={styles.HostEditView}>
      <QuestionEditHeader />
      <div className={styles.content}>
        <QuestionSidebar />
        <QuestionEditor />
        {/* QuestionEdit -OR- QuestionCatalog */}
      </div>
    </div>
  );
}

export default HostEditView;