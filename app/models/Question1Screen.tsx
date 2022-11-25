import React from 'react'

import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks'
import { answerQuestion } from '../reduxToolKit/slices/questionsSlice'

import Question1ScreenView from '../views/Question1ScreenView'

const Question1Screen = () => {
  const language = useAppSelector((state) => state.question);
  const selectedAnswer = language.questions[0].answerGiven;
  const dispatch = useAppDispatch();
  
  const handleRadioButtonPress = (value: string) => {
    dispatch(answerQuestion({ questionId: 0, answer: value, answered: true}))
  }

  return (
    <Question1ScreenView
      selectedAnswer={selectedAnswer}
      questions={language.questions}
      // setSelectedAnswer={setSelectedAnswer}
      handleRadioButtonPress={handleRadioButtonPress}
    />
  )
}

export default Question1Screen
