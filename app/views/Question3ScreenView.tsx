import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

import CustomNavigationButtons from '../components/CustomNavigationButtons'
import CustomTextInput from '../components/CustomTextInput'

import GlobleStyles from '../utils/GlobleStyles'
import { AppColor } from '../utils/StyleConstant'

type Question3ScreenViewProps = {
  question: {
      id: number,
      title: string,
      options: string[],
      answer: string
      answered: false,
      answerGiven: string
    },
  selectedAnswer: string,
  handleAnswerChange: (active: string) => void
}

const Question3ScreenView = (props: Question3ScreenViewProps) => {
  const { question, selectedAnswer, handleAnswerChange } = props;

  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar/>
      <CustomNavigationButtons />
      <Text style={GlobleStyles.questionText}>{question.title}</Text>
      <CustomTextInput
        style={GlobleStyles.customTextInput}
        placeholder="Enter your answer here"
        placeholderColor={AppColor.grey}
        value={selectedAnswer}
        onChangeText={text => {
          handleAnswerChange(text);
        }}
      />
    </SafeAreaView>
  )
}

export default Question3ScreenView

const styles = StyleSheet.create({})