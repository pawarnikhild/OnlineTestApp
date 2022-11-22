import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper';

import CustomNavigationButtons from '../components/CustomNavigationButtons'
import { Question1ScreenViewProps } from './Question1ScreenView'

import GlobleStyles from '../utils/GlobleStyles'

type Question2ScreenViewProps = {
  question: {
      id: number,
      title: string,
      options: string[],
      answer: string
      answered: false,
      answerGiven: string
    },
  selectedAnswer: string,
  handleRadioButtonPress: (active: string) => void
}

const Question2ScreenView = (props: Question2ScreenViewProps) => {
  const { question, selectedAnswer, handleRadioButtonPress } = props;
  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar/>
      <CustomNavigationButtons />
      <Text style={GlobleStyles.questionText}>{question.title}</Text>
      {/* <View style={Question1ScreenStyle.radioButtonView}> */}
      <RadioButton.Group onValueChange={value => {handleRadioButtonPress(value);}} value={selectedAnswer}>
        <RadioButton.Item label={question.options[0]} value={question.options[0]} />
        <RadioButton.Item label={question.options[1]} value={question.options[1]} />
      </RadioButton.Group>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default Question2ScreenView

const styles = StyleSheet.create({})