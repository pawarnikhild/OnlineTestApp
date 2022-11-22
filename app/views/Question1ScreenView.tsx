import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';

import CustomNavigationButtons from '../components/CustomNavigationButtons';

import GlobleStyles from '../utils/GlobleStyles';
import Question1ScreenStyle from '../styles/Question1ScreenStyle'

export type Question1ScreenViewProps = {
  questions: [
    {
      id: number,
      title: string,
      options: string[],
      answer: string
      answered: false,
      answerGiven: string
    }
  ],
  selectedAnswer: string,
  // setSelectedAnswer: (active: string) => void
  handleRadioButtonPress: (active: string) => void
  
}

const Question1ScreenView = (props: Question1ScreenViewProps) => {
  const { questions, selectedAnswer,  handleRadioButtonPress } = props;
  
  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar/>
      <CustomNavigationButtons />
      <Text style={GlobleStyles.questionText}>{questions[0].title}</Text>
      {/* <View style={Question1ScreenStyle.radioButtonView}>
        <RadioButton
          value={question.options.optioin1}
          status={ selectedAnswer === question.options.optioin1 ? 'checked' : 'unchecked' }
          onPress={() => {
            setSelectedAnswer(question.options.optioin1);
            handleRadioButtonPress();
          }}
        />
        <Text style={Question1ScreenStyle.radioButtonText}>{question.options.optioin1}</Text>
      </View>
      <View style={Question1ScreenStyle.radioButtonView}>
        <RadioButton
          value={question.options.optioin2}
          status={ selectedAnswer === question.options.optioin2 ? 'checked' : 'unchecked' }
          onPress={() => {
            setSelectedAnswer(question.options.optioin2);
            handleRadioButtonPress();
          }}
        />
        <Text style={Question1ScreenStyle.radioButtonText}>{question.options.optioin2}</Text>
      </View>
      <View style={Question1ScreenStyle.radioButtonView}>
        <RadioButton
          value={question.options.optioin3}
          status={ selectedAnswer === question.options.optioin3 ? 'checked' : 'unchecked' }
          onPress={() => {
            setSelectedAnswer(question.options.optioin3);
            handleRadioButtonPress();
          }}
        />
        <Text style={Question1ScreenStyle.radioButtonText}>{question.options.optioin3}</Text>
      </View>
      <View style={Question1ScreenStyle.radioButtonView}>
        <RadioButton
          value={question.options.optioin4}
          status={ selectedAnswer === question.options.optioin4 ? 'checked' : 'unchecked' }
          onPress={() => {
            setSelectedAnswer(question.options.optioin4);
            handleRadioButtonPress();
          }}
        />
        <Text style={Question1ScreenStyle.radioButtonText}>{question.options.optioin4}</Text>
      </View> */}
      <View style={Question1ScreenStyle.radioButtonView}>
      <RadioButton.Group onValueChange={value => {handleRadioButtonPress(value);}} value={selectedAnswer}>
        <RadioButton.Item label={questions[0].options[0]} value={questions[0].options[0]} />
        <RadioButton.Item label={questions[0].options[1]} value={questions[0].options[1]} />
        <RadioButton.Item label={questions[0].options[2]} value={questions[0].options[2]} />
        <RadioButton.Item label={questions[0].options[3]} value={questions[0].options[3]} />
      </RadioButton.Group>
      </View>

    </SafeAreaView>
  )
}

export default Question1ScreenView

const styles = StyleSheet.create({})