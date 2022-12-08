// -------------------------------------------------------------------------------------
// Note -
// -------------------------------------------------------------------------------------
/* 
  In this file we are dealing with the question having multiple answers this means answers
  of this question are in an array. So we can not send answer on only one click because
  there are many answers(4 here).
  There are two ways to handle this scenario -
    1) With the help of a button -
      - Here we are using a button to dispatch all answers in one array to redux.
      - No use of useEffect.
      - Complexity - Low
    2) With the help of useEffect hook -
      - Here a function written in useEffect will decide wheather to dispatch or not array
        of answers to redux.
      - No use of button(The function will run on every answer change).
      - Complexity - High
*/



// -------------------------------------------------------------------------------------
// 1) With the help of a button -
// -------------------------------------------------------------------------------------

import React, { useState } from 'react';
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

  type answerZonesType = {
      id: number,
      text: string,
      items: [{id: number, text: string}] | any[]
    } []

  // We are not considering id in options as well as answeZones for any calculation but is required by
  // volkeno-react-native-drag-drop package.
  const [answerZones, setAnswerZones] = useState<answerZonesType>([
    {
      id: 1,
      text: '1)',
      // items: [{ id: 5, text: "Test existing item 5" }],
      items: language.questions[3].answered ? [{id: 0, text: selectedAnswer[0]}] : [],
    },
    {
      id: 2,
      text: '2)',
      items: language.questions[3].answered ? [{id: 1, text: selectedAnswer[1]}] : [],
    },
    {
      id: 3,
      text: '3)',
      items: language.questions[3].answered ? [{id: 2, text: selectedAnswer[2]}] : [],
    },
    {
      id: 4,
      text: '4)',
      items: language.questions[3].answered ? [{id: 3, text: selectedAnswer[3]}] : [],
    },
  ]);

  const showToast = () => {
    ToastAndroid.show("Answer submitted successfully !", ToastAndroid.SHORT);
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

      let answerArray = answerZones.map((obj) => obj.items[0].text);
      // console.log('answerArray', answerArray);
      dispatch(
        answerQuestion({ questionId: 3, answer: answerArray, answered: true }),
      );
      showToast();
    }
  };

  const printAnswerChange = () => {
    answerZones.forEach((obj, index) => {
      console.log('answerZones', index, obj.items)
    });
    console.log('-----------------------------------');
  };

  return (
    <Question4ScreenView
      options={options}
      answerZones={answerZones}
      selectedAnswer={selectedAnswer}
      question={language.questions[3]}
      setOptions={setOptions}
      setAnswerZones={setAnswerZones}
      printAnswerChange={printAnswerChange}
      submitAnswer={submitAnswer}
    />
  );
};

export default Question4Screen;



// -------------------------------------------------------------------------------------
// 2) With the help of useEffect hook -
// -------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { ToastAndroid } from 'react-native';

// import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks';
// import { answerQuestion } from '../reduxToolKit/slices/questionsSlice';

// import Question4ScreenView from '../views/Question4ScreenView';

// const Question4Screen = () => {
//   const language = useAppSelector(state => state.question);
//   const selectedAnswer = language.questions[3].answerGiven;
//   const dispatch = useAppDispatch();
//   const [options, setOptions] = useState([
//     { id: 1, text: language.questions[3].options[0] },
//     { id: 2, text: language.questions[3].options[1] },
//     { id: 3, text: language.questions[3].options[2] },
//     { id: 4, text: language.questions[3].options[3] },
//   ]);

//   type answerZonesType = 
//     {
//       id: number,
//       text: string,
//       items: [{id: number, text: any}] | any[]
//   } []
  
//   const [answerZones, setAnswerZones] = useState<answerZonesType>([
//         {
//           id: 1,
//           text: '1)',
//           // items: [{ id: 5, text: "Test existing item 5" }],
//           items: language.questions[3].answered ? [{id: 0, text: selectedAnswer[0]}] : [],
//         },
//         {
//           id: 2,
//           text: '2)',
//           items: language.questions[3].answered ? [{id: 1, text: selectedAnswer[1]}] : [],
//         },
//         {
//           id: 3,
//           text: '3)',
//           items: language.questions[3].answered ? [{id: 2, text: selectedAnswer[2]}] : [],
//         },
//         {
//           id: 4,
//           text: '4)',
//           items: language.questions[3].answered ? [{id: 3, text: selectedAnswer[3]}] : [],
//         },
//       ]);

//   useEffect(() => {
//     dispatchAnswer()
//   }, [answerZones]);
  
//   const dispatchAnswer = () => {
//     if(
//       answerZones[0]?.items.length > 0 &&
//       answerZones[1]?.items.length > 0 &&
//       answerZones[2]?.items.length > 0 &&
//       answerZones[3]?.items.length > 0
//     ) {
//       let answerArray = answerZones.map((obj) => obj.items[0].text);
//       dispatch(answerQuestion({ questionId: 3, answer: answerArray, answered: true }));
//         showToast();
//       }
//     }
    
//     const showToast = () => {
//       ToastAndroid.show("Answer submitted successfully !", ToastAndroid.SHORT);
//     };

//     const printAnswerChange = () => {
//     answerZones.forEach((obj, index) => {
//       console.log('answerZones', index, obj.items)
//     });
//     console.log('-----------------------------------');
//   };

//   return (
//     <Question4ScreenView
//       options={options}
//       answerZones={answerZones}
//       question={language.questions[3]}
//       setOptions={setOptions}
//       setAnswerZones={setAnswerZones}
//       printAnswerChange={printAnswerChange}
//     />
//   );
// };

// export default Question4Screen;
