import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getPackByID, postDeck, getQuestions } from '../../util/api';
import { unpackDeck, packDeck, unpackQuestion } from '../../util/deckTransform';

import styles from './styles.module.scss';
import QuestionEditHeader from './containers/Header';
import QuestionSidebar from './containers/Sidebar';
import QuestionEditor from './containers/QuestionEditor';
import MoreQuestions from './containers/Overlay';
import LoadingView from '../LoadingView';

const defaultQuestion = {
  name: 'Default Question',
  question: 'New Question',
  answer: '',
  falseAnswers: ['', '', ''],
  // non-standard items
  time: 20,
  points: 1000,
};

const defaultDeck = {
  name: 'New Deck',
  description: 'No description.',
  questions: [
    {...defaultQuestion},
  ],
};

export default function HostEditView() {
  const { id } = useParams();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const [curDeck, setDeck] = useState({...unpackDeck(defaultDeck)});
  const [curQuestions, setQuestions] = useState(curDeck.questions);
  const [curQuestion, setQuestion] = useState(curDeck.questions[0]);
  const [hasOverlay, setOverlay] = useState(false);
  // const [questions, setQuestions] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState(curDeck.questions);

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

    // getQuestions().then((res) => {
    //   setMoreQuestions(res);
    // });
  }, [id]);

  const handleDeckConfirm = () => {
    packDeck(curDeck);

    console.log('Posted a pack.', curDeck);

    postDeck(curDeck).catch((err) => {
      console.log(err);
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

  const handleNewQuestion = () => {
    const newQuestion = unpackQuestion({...defaultQuestion});
    curDeck.questions.push(newQuestion);
    setQuestions(curDeck.questions);
    setQuestion(curDeck.questions[curDeck.questions.length-1]);
  };

  const handleAddExistingQuestion = (question) => {
    curDeck.questions.push(question);
    setQuestion(curDeck.questions[curDeck.questions.length-1]);
  }

  const handleOverlay = () => {
    setOverlay(!hasOverlay);
  }

  if (error) return <div>Error!</div>;
  if (!isLoaded) return <LoadingView />;

  return (
    <div className={styles.HostEditView}>
      <QuestionEditHeader name={curDeck.name} onChange={handleChangeTitle} onSubmit={handleDeckConfirm} />
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <QuestionSidebar questions={curQuestions} onChange={handleChangeQuestion} onMoreQuestions={handleOverlay} onAddQuestion={handleNewQuestion} />
        </div>
        <div className={`${styles.editor}`}>
          {hasOverlay ?
            <MoreQuestions questions={moreQuestions} onAdd={handleAddExistingQuestion} />
            : <QuestionEditor question={curQuestion} />}
        </div>
      </div>
    </div>
  );
}