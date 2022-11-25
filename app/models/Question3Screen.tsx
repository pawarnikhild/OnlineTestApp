import React from 'react'

import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks'
import { answerQuestion } from '../reduxToolKit/slices/questionsSlice'

import Question3ScreenView from '../views/Question3ScreenView'

const Question3Screen = () => {
  const language = useAppSelector((state) => state.question);
  const selectedAnswer = language.questions[2].answerGiven;
  const dispatch = useAppDispatch();
  
  const handleAnswerChange = (value: string) => {
      dispatch(answerQuestion({ questionId: 2, answer: value, answered: true}));
  }

  return (
    <Question3ScreenView
      selectedAnswer={selectedAnswer}
      question={language.questions[2]}
      handleAnswerChange={handleAnswerChange}
    />
  )
}

export default Question3Screen