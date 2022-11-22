import React, { useState, useEffect} from 'react'
import { View, Text } from 'react-native'

import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks'
import { answerQuestion } from '../reduxToolKit/slices/questionsSlice'

import Question2ScreenView from '../views/Question2ScreenView'

const Question2Screen = () => {
  const language = useAppSelector((state) => state.question);
  const selectedAnswer = language.questions[1].answerGiven;
  // console.log(selectedAnswer)

  const dispatch = useAppDispatch();
  // const [selectedAnswer, setSelectedAnswer ] = useState('');

  // useEffect(() => { // useEffect is used because states are getting assigned lately
  //   // dispatch(answerQuestion({language: language, question: 'Question1', answer: selectedAnswer}))
  //   handleRadioButtonPress();
  // },[selectedAnswer] );

  const handleRadioButtonPress = (value: string) => {
    dispatch(answerQuestion({ questionId: 1, answer: value, answered: true}))
  }

  // console.log('language', language.questions[1])
  
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