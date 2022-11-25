import React from 'react'

import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks'
import { answerQuestion } from '../reduxToolKit/slices/questionsSlice'

import Question2ScreenView from '../views/Question2ScreenView'

const Question2Screen = () => {
  const language = useAppSelector((state) => state.question);
  const selectedAnswer = language.questions[1].answerGiven;
  const dispatch = useAppDispatch();

  const handleRadioButtonPress = (value: string) => {
    dispatch(answerQuestion({ questionId: 1, answer: value, answered: true}))
  }

  return (
    <Question2ScreenView
      selectedAnswer={selectedAnswer}
      question={language.questions[1]}
      // setSelectedAnswer={setSelectedAnswer}
      handleRadioButtonPress={handleRadioButtonPress}
    />
  )
}

export default Question2Screen