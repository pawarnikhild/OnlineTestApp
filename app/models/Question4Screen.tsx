import React, { useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';

import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks';
import { answerQuestion } from '../reduxToolKit/slices/questionsSlice';

import Question4ScreenView from '../views/Question4ScreenView';

const Question4Screen = () => {
  const language = useAppSelector(state => state.question);
  const selectedAnswer = language.questions[3].answerGiven;
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState([
    { id: 1, text: language.questions[3].options[0] },
    { id: 2, text: language.questions[3].options[1] },
    { id: 3, text: language.questions[3].options[2] },
    { id: 4, text: language.questions[3].options[3] },
  ]);

  // type answerZonesType = {[
  //   {
  //     id: number,
  //     text: string,
  //     items: [{id: number, text: string}]
  //   }
  // ]}

  const [answerZones, setAnswerZones] = useState([
    {
      id: 1,
      text: '1)',
      // items: [{ id: 5, text: "Test existing item 5" }],
      items: [],
    },
    {
      id: 2,
      text: '2)',
      items: [],
    },
    {
      id: 3,
      text: '3)',
      items: [],
    },
    {
      id: 4,
      text: '4)',
      items: [],
    },
  ]);

  // console.log('options',options)
  // console.log('answerZones', answerZones)
  // console.log('Items',answerZones[0].items)
  // console.log('Q4 selectedAnswer',selectedAnswer)
  // console.log('Q4 selectedAnswer type', typeof selectedAnswer)

  const showNoVehicleNoToast = () => {
    ToastAndroid.show("Answer submitted successfully !", ToastAndroid.SHORT);
  };

  const handleAnswerChange = () => {
    console.log('answerZones 0', answerZones[0].items);
    console.log('answerZones 1', answerZones[1].items);
    console.log('answerZones 2', answerZones[2].items);
    console.log('answerZones 3', answerZones[3].items);
    console.log('-----------------------------------');

    if (answerZones[0].items) {
      // dispatch(answerQuestion({ questionId:3, answer: JSON.stringify(answerZones), answered: true}))
    }
  };
  const submitAnswer = () => {
    if (
      answerZones[0].items.length < 1 ||
      answerZones[1].items.length < 1 ||
      answerZones[2].items.length < 1 ||
      answerZones[3].items.length < 1
    ) {
      alert('You have not answered the question properly !');
    } else {
      let answerArray = [
        answerZones[0].items[0].text,
        answerZones[1].items[0].text,
        answerZones[2].items[0].text,
        answerZones[3].items[0].text,
      ];
      console.log('answerArray', answerArray);
      dispatch(
        answerQuestion({ questionId: 3, answer: answerArray, answered: true }),
      );
      showNoVehicleNoToast();
    }
  };

  return (
    <Question4ScreenView
      options={options}
      answerZones={answerZones}
      selectedAnswer={selectedAnswer}
      question={language.questions[3]}
      setOptions={setOptions}
      setAnswerZones={setAnswerZones}
      handleAnswerChange={handleAnswerChange}
      submitAnswer={submitAnswer}
    />
  );
};

export default Question4Screen;
