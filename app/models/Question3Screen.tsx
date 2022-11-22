import React, { useState, useEffect} from 'react'
import { View, Text } from 'react-native'

import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks'
import { answerQuestion } from '../reduxToolKit/slices/questionsSlice'

import Question3ScreenView from '../views/Question3ScreenView'

const Question3Screen = () => {
  const language = useAppSelector((state) => state.question);
  const selectedAnswer = language.questions[2].answerGiven;
  const dispatch = useAppDispatch();
  

  // useEffect(() => { // useEffect is used because states are getting assigned lately
  //   // dispatch(answerQuestion({language: language, question: 'Question1', answer: selectedAnswer}))
  //   handleAnswerChange();
  // },[selectedAnswer] );

  const handleAnswerChange = (value: string) => {
      dispatch(answerQuestion({ questionId: 2, answer: value, answered: true}));
  }

  // console.log(selectedAnswer)

  return (
    <Question3ScreenView
      selectedAnswer={selectedAnswer}
      question={language.questions[2]}
      handleAnswerChange={handleAnswerChange}
    />
  )
}

export default Question3Screen