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

  There is one fault in the 2nd way, useEffect runs on every render(when we navigate to 
  this screen), so actions is getting dispatched.
  If answer is not selected empty array and answered: false is getting dispatched.
  If answer is selcted then the selected answer and answered: true is getting dispatched.
*/



// -------------------------------------------------------------------------------------
// 1) With the help of a button -
// -------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { Alert } from 'react-native';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackNavigationParamList } from '../routes/StackNavigation';
import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks';
import { answerQuestion } from '../reduxToolKit/slices/questionsSlice';
import { calculateResult } from '../reduxToolKit/slices/resultSlice';

import Question5ScreenView from '../views/Question5ScreenView';

const Question5Screen = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavigationParamList>>();
  const language = useAppSelector(state => state.question);
  const selectedAnswer = language.questions[4].answerGiven;
  const dispatch = useAppDispatch();

  // This function is written before declaring state. It sets state or maintains state 
  // if answser is given.
  const setOrMaintainState = (optionNo: number) => {
    if (selectedAnswer.length > 0) {
      for (let i = 0; i < selectedAnswer.length; i++) {
        if (selectedAnswer.includes(language.questions[4].options[optionNo])) return true;
        else return false;
      }
    } else return false;
  };

  type checkBoxStateType = 
    {
      id: number,
      // value: boolean | (active: number) => boolean,
      value: boolean | undefined,
      label: string
  } [];

  const [checkBoxState, setCheckBoxState] = useState<checkBoxStateType>([
    {
      id: 0,
      value: setOrMaintainState(0),
      // or we can do like this -
      // value: selectedAnswer[0] == language.questions[4].options[0] ? true : false,
      label: language.questions[4].options[0],
    },
    {
      id: 1,
      value: setOrMaintainState(1),
      label: language.questions[4].options[1],
    },
    {
      id: 2,
      value: setOrMaintainState(2),
      label: language.questions[4].options[2],
    },
    {
      id: 3,
      value: setOrMaintainState(3),
      label: language.questions[4].options[3],
    },
  ]);

  const handleCheckBoxState = (id: number) => {
    const tempArray = checkBoxState;
    let temp = tempArray.map(obj => {
      if (id === obj.id) {
        return { ...obj, value: !obj.value };
      }
      return obj;
    });
    setCheckBoxState(temp);
  };

  const showToast = () => {
    ToastAndroid.show('Answer submitted successfully !', ToastAndroid.SHORT);
  };

  const submitAnswer = () => {
    let answerGiven: string[] = [];
    checkBoxState.forEach(item => {
      if (item.value) {
        answerGiven.push(item.label);
      }
    });
    dispatch(answerQuestion({ questionId: 4, answer: answerGiven, answered: true }));
    showToast();
  };

  const submitTest = () => {
    Alert.alert('Confirm', 'Do you want to submit test ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Test submission canceled !'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(calculateResult(language));
          navigation.navigate('Result');
        },
      },
    ]);
  };

  return (
    <Question5ScreenView
      question={language.questions[4]}
      checkBoxState={checkBoxState}
      handleCheckBoxState={handleCheckBoxState}
      submitAnswer={submitAnswer}
      submitTest={submitTest}
    />
  );
};

export default Question5Screen;



// -------------------------------------------------------------------------------------
// 2) With the help of useEffect hook -
// -------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { ToastAndroid } from 'react-native';
// import { Alert } from 'react-native';

// import { StackNavigationParamList } from '../routes/StackNavigation';
// import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks';
// import { answerQuestion } from '../reduxToolKit/slices/questionsSlice';
// import { calculateResult } from '../reduxToolKit/slices/resultSlice';

// import Question5ScreenView from '../views/Question5ScreenView';

// const Question5Screen = () => {
//   const navigation = useNavigation<StackNavigationProp<StackNavigationParamList>>();
//   const language = useAppSelector(state => state.question);
//   const selectedAnswer = language.questions[4].answerGiven;
//   const dispatch = useAppDispatch();

//   const setOrMaintainState = (optionNo: number) => {
//     // This function is written before declaring state. It sets state or maintains state 
//     // if answser is given.
//     if (selectedAnswer.length > 0) {
//       for (let i = 0; i < selectedAnswer.length; i++) {
//         if (selectedAnswer.includes(language.questions[4].options[optionNo])) return true;
//         else return false;
//       }
//     } else return false;
//   };

//   type checkBoxStateType = 
//     {
//       id: number,
//       // value: boolean | (active: number) => boolean,
//       value: boolean | undefined,
//       label: string
//   } [];

//   const [checkBoxState, setCheckBoxState] = useState<checkBoxStateType>([
//     {
//       id: 0,
//       value: setOrMaintainState(0),
//       // or we can do like this -
//       // value: selectedAnswer[0] === language.questions[4].options[0] ? true : false,
//       label: language.questions[4].options[0],
//     },
//     {
//       id: 1,
//       value: setOrMaintainState(1),
//       label: language.questions[4].options[1],
//     },
//     {
//       id: 2,
//       value: setOrMaintainState(2),
//       label: language.questions[4].options[2],
//     },
//     {
//       id: 3,
//       value: setOrMaintainState(3),
//       label: language.questions[4].options[3],
//     },
//   ]);

//   useEffect(() => {
//     dispatchAnswer();
//   }, [checkBoxState]);

//   const handleCheckBoxState = (id: number) => {
//     const tempArray = checkBoxState;
//     let temp = tempArray.map(obj => {
//       if (id === obj.id) {
//         return { ...obj, value: !obj.value };
//       }
//       return obj;
//     });
//     setCheckBoxState(temp);
//   };

//   const showToast = () => {
//     ToastAndroid.show('Answer submitted successfully !', ToastAndroid.SHORT);
//   };
  
//   const dispatchAnswer = () => {
//     let readyToDispatch = false;
//     checkBoxState.forEach((obj) => { if (obj.value) readyToDispatch = true })
//     if (readyToDispatch) {
//       let answerGiven: string[] = [];
//       checkBoxState.forEach((obj) => {
//         if (obj.value === true) {
//           answerGiven.push(obj.label)
//         }
//         if (checkBoxState.length == (obj.id + 1)) {
//           dispatch(answerQuestion({ questionId: 4, answer: answerGiven, answered: true }));
//           showToast();
//         }
//       })
//     } else dispatch(answerQuestion({ questionId: 4, answer: [], answered: false })); // This is running on every render
//   }
  
//   const submitTest = () => {
//     Alert.alert('Confirm', 'Do you want to submit test ?', [
//       {
//         text: 'Cancel',
//         onPress: () => console.log('Test submission canceled !'),
//         style: 'cancel',
//       },
//       {
//         text: 'OK',
//         onPress: () => {
//           dispatch(calculateResult(language));
//           navigation.navigate('Result');
//         },
//       },
//     ]);
//   };

//   const printAnswerChange = () => {
//     checkBoxState.forEach((obj, index) => {
//       console.log('checkBox', index, obj.value)
//     });
//     console.log('-----------------------------------');
//   };

//   return (
//     <Question5ScreenView
//       question={language.questions[4]}
//       checkBoxState={checkBoxState}
//       handleCheckBoxState={handleCheckBoxState}
//       printAnswerChange={printAnswerChange}
//       submitTest={submitTest}
//     />
//   );
// };

// export default Question5Screen;
