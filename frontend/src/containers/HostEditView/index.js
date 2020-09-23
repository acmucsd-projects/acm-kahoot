import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getQuestions, getPackByID, postPack, getQuestionByID } from '../../util/api';

import styles from './styles.module.scss';
import QuestionEditHeader from './containers/Header';
import QuestionSidebar from './containers/Sidebar';
import QuestionEditor from './containers/QuestionEditor';
import Overlay from './containers/Overlay';
import LoadingView from '../LoadingView';

function getDefaultDeck() {
  const defaultDeck = {
    name: 'New Deck',
    description: 'No description.',
    questions: [
      {
        name: 'Default Question',
        question: 'New Question',
        answers: [
          {
            answer: '',
            correct: true,
          },
          {
            answer: '',
            correct: false,
          },
          {
            answer: '',
            correct: false,
          },
          {
            answer: '',
            correct: false,
          },
        ],
        points: 1000,
        time: 20,
      },
    ],
  };
  return defaultDeck;
}

export default function HostEditView() {
  const { id } = useParams();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const [hasOverlay, setOverlay] = useState(false);
  const [curDeck, setDeck] = useState(getDefaultDeck());
  const [curQuestions, setQuestions] = useState(curDeck.questions);
  const [curQuestion, setQuestion] = useState(curDeck.questions[0]);
  // const [questions, setQuestions] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState(curDeck.questions);

  // Fetch curDeck info if we're editing an existing curDeck.
  useEffect(() => {
    if (parseInt(id) >= 0) {
      getPackByID(id).then((result) => {
        const questionIDs = result.answers;
        Promise.all(questionIDs.map(id => getQuestionByID(id)), (questions) => {
          result.questions = questions;
        });
        setDeck(result);
        setQuestion(result.questions[0]);
        setIsLoaded(true);
      }).catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }

    getQuestions().then((questions) => {
      setMoreQuestions(questions);
    });
  }, [id]);

  const handleDeckConfirm = () => {
    console.log('Posted a pack.', curDeck);

    postPack(curDeck).catch((err) => {
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
    const defaultQuestion = {
      name: 'Default Question',
      question: 'New Question',
      answers: [
        {
          answer: '',
          correct: true,
        },
        {
          answer: '',
          correct: false,
        },
        {
          answer: '',
          correct: false,
        },
        {
          answer: '',
          correct: false,
        },
      ],
      points: 1000,
      time: 20,
    };
    curDeck.questions.push({...defaultQuestion});
    setQuestions(curDeck.questions);
    setQuestion(curDeck.questions[curDeck.questions.length-1]);
  };

  const handleAddExistingQuestion = (question) => {
    const copyQuestion = {
      name: question.name,
      question: question.question,
      answers: [
        {
          answer: question.answers[0].answer,
          correct: question.answers[0].correct,
        },
        {
          answer: question.answers[1].answer,
          correct: question.answers[1].correct,
        },
        {
          answer: question.answers[2].answer,
          correct: question.answers[2].correct,
        },
        {
          answer: question.answers[3].answer,
          correct: question.answers[3].correct,
        },
      ],
      points: question.points,
      time: question.time,
    };
    curDeck.questions.push(copyQuestion);
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
            <Overlay questions={moreQuestions} onAdd={handleAddExistingQuestion} />
            : <QuestionEditor question={curQuestion} />}
        </div>
      </div>
    </div>
  );
}