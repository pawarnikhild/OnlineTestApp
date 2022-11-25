import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import CustomNavigationButtons from '../components/CustomNavigationButtons';

import GlobleStyles from '../utils/GlobleStyles';

export type Question1ScreenViewProps = {
  questions: [
    {
      id: number;
      title: string;
      options: string[];
      answer: string;
      answered: false;
      answerGiven: string;
    },
  ];
  selectedAnswer: string;
  handleRadioButtonPress: (active: string) => void;
};

const Question1ScreenView = (props: Question1ScreenViewProps) => {
  const { questions, selectedAnswer, handleRadioButtonPress } = props;

  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar />
      <CustomNavigationButtons />
      <Text style={GlobleStyles.questionText}>{questions[0].title}</Text>
      <RadioButton.Group
        onValueChange={value => {
          handleRadioButtonPress(value);
        }}
        value={selectedAnswer}>
        <RadioButton.Item
          label={questions[0].options[0]}
          value={questions[0].options[0]}
        />
        <RadioButton.Item
          label={questions[0].options[1]}
          value={questions[0].options[1]}
        />
        <RadioButton.Item
          label={questions[0].options[2]}
          value={questions[0].options[2]}
        />
        <RadioButton.Item
          label={questions[0].options[3]}
          value={questions[0].options[3]}
        />
      </RadioButton.Group>
    </SafeAreaView>
  );
};

export default Question1ScreenView;
