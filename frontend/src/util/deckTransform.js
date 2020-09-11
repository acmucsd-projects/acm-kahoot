export const unpackQuestion = (question) => {
  const answers = question.falseAnswers.map((a) => ({
    text: a,
    isCorrect: false,
  }));
  answers.unshift({ text: question.answer, isCorrect: true });

  const unpackedQuestion = {
    ...question,
    answers: answers,
  };

  return unpackedQuestion;
}

export const packQuestion = (question) => {
  const answer = question.answers.filter(a => a.isCorrect)[0];
  const falseAnswers = question.answers.filter(a => !a.isCorrect);

  const packedQuestion = {
    ...question,
    answer: answer,
    falseAnswers: falseAnswers,
  };
  delete packedQuestion.answers;

  return packedQuestion;
}

export const unpackDeck = (deck) => {
  deck.questions = deck.questions.map(q => unpackQuestion(q));
  return deck;
}

export const packDeck = (deck) => {
  deck.questions = deck.questions.map(q => packQuestion(q));
  return deck;
}