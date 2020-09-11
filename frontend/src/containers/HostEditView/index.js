import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getPackByID, postDeck } from '../../util/apiRequests';
import { unpackDeck, packDeck } from '../../util/deckTransform';

import styles from './styles.module.scss';
import QuestionEditHeader from './containers/Header';
import QuestionSidebar from './containers/Sidebar';
import QuestionEditor from './containers/QuestionEditor';
// import MoreQuestions from '../components/MoreQuestions';
import LoadingView from '../LoadingView';

const defaultQuestion = {
  name: 'Default Question',
  question: 'New Question',
  answer: 'Answer 1',
  falseAnswers: ['Answer 2', 'Answer 3', 'Answer 4'],
  // non-standard items
  time: 20,
  points: 2000,
};

const defaultDeck = {
  name: 'New Deck',
  description: 'No description.',
  questions: [
    {...defaultQuestion},
    {...defaultQuestion},
    {...defaultQuestion},
    {...defaultQuestion},
    {...defaultQuestion},
  ],
};

export default function HostEditView() {
  const { id } = useParams();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const [curDeck, setDeck] = useState({...unpackDeck(defaultDeck)});
  const [curQuestion, setQuestion] = useState(curDeck.questions[0]);

  // Fetch curDeck info if we're editing an existing curDeck.
  useEffect(() => {
    if (parseInt(id) >= 0) {
      getPackByID(id)
        .then((result) => {
          setIsLoaded(true);
          unpackDeck(result);
          setDeck(result);
          setQuestion(result.questions[0]);
        }).catch((err) => {
          setIsLoaded(true);
          setError(err);
        });
    } else {
      setIsLoaded(true);
    }
  }, [id]);

  const handleDeckConfirm = () => {
    packDeck(curDeck);

    console.log('Posted a pack.', curDeck);

    postDeck(curDeck).catch((err) => {
      console.log(err)
    }).then(() => {
      history.push('/host/decks');
    });
  };

  const handleChangeTitle = (title) => {
    curDeck.name = title;
  };

  const handleChangeQuestion = (question) => {
    setQuestion(question);
  };

  if (error) return <div>Error!</div>;
  if (!isLoaded) return <LoadingView />;

  return (
    <div className={styles.HostEditView}>
      <QuestionEditHeader name={curDeck.name} onChange={handleChangeTitle} onSubmit={handleDeckConfirm} />
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <QuestionSidebar questions={curDeck.questions} onChange={handleChangeQuestion} />
        </div>
        <div className={`${styles.editor} ${styles.scroller}`}>
          <QuestionEditor question={curQuestion} />
          {/* <MoreQuestions questions={} /> */}
        </div>
      </div>
    </div>
  );
}