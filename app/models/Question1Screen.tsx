import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks'
import { answerQuestion } from '../reduxToolKit/slices/questionsSlice'

import Question1ScreenView from '../views/Question1ScreenView'

const Question1Screen = () => {
  // const language = useAppSelector((state) => state.user.preferedLanguage);
  // const question = useAppSelector((state) => state.question.language.Question1);
  // const language = useAppSelector((state) => state.question)
  const language = useAppSelector((state) => state.question);
  const selectedAnswer = language.questions[0].answerGiven;
  
  const dispatch = useAppDispatch();
  // const [selectedAnswer, setSelectedAnswer ] = useState('');
  // const isFocused = useIsFocused();
  
  // useEffect(() => { // useEffect is used because states are getting assigned lately
  //   // dispatch(answerQuestion({language: language, question: 'Question1', answer: selectedAnswer}))
  //   handleRadioButtonPress();
  // },[selectedAnswer]);

  // useEffect(() => {
  //   console.log('Question', language.questions[0])
  // }, [isFocused]);
  
  const handleRadioButtonPress = (value: string) => {
    // setSelectedAnswer(value)    
    // let localVar = selectedAnswer;
    // let answered = false
    // if(selectedAnswer.length <= 0 ) {
    //   answered = false;
    // } else {
    //   answered = true;
    // }
    dispatch(answerQuestion({ questionId: 0, answer: value, answered: true}))
    // console.log('skldjflkdjf', selectedAnswer)
  }
  
  // console.log(selectedAnswer)
  // console.log('language', language)
  // console.log('language', language.questions[0])
  // console.log('selectedAnswer', selectedAnswer)

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
