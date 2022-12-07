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
  const navigation =
    useNavigation<StackNavigationProp<StackNavigationParamList>>();
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

  const [checkBoxState, setCheckBoxState] = useState([
    {
      id: 0,
      value: setOrMaintainState(0),
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
      // or we can do like this -
      // value: selectedAnswer[0] == language.questions[4].options[0] ? true : false,
      label: language.questions[4].options[3],
    },
  ]);

  const handleCheckBoxState = (id: number) => {
    // This is ullas kunder logic working
    console.log('handleCheckBoxState running');
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
    dispatch(
      answerQuestion({ questionId: 4, answer: answerGiven, answered: true }),
    );
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

  // console.log('selectedAnswer', selectedAnswer);
  // console.log('checkBoxState in Q5',checkBoxState)

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

// ---------------------------------------------------------------------------------------

// import React, {useState, useEffect} from 'react';
// import {Alert} from 'react-native';
// import {ToastAndroid} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';

// import {StackNavigationParamList} from '../routes/StackNavigation';
// import {useAppDispatch, useAppSelector} from '../reduxToolKit/hooks';
// import {answerQuestion} from '../reduxToolKit/slices/questionsSlice';
// import {calculateResult} from '../reduxToolKit/slices/resultSlice';

// import Question5ScreenView from '../views/Question5ScreenView';

// const Question5Screen = () => {
//   const navigation = useNavigation<StackNavigationProp<StackNavigationParamList>>();
//   const language = useAppSelector(state => state.question);
//   const selectedAnswer = language.questions[4].answerGiven;
//   const dispatch = useAppDispatch();
//   const [checked, setChecked] = useState(false);
//   const [checked1, setChecked1] = useState(false);
//   const [checked2, setChecked2] = useState(false);
//   const [checked3, setChecked3] = useState(false);

//   const [checkBoxValue, setCheckBoxValue] = useState([
//     {id: 0, value: false, label: 'Zero'},
//     {id: 1, value: false, label: 'One'},
//     {id: 2, value: false, label: 'Two'},
//     {id: 3, value: false, label: 'Three'}
//   ]);

//   useEffect(() => {
//     // console.log('useEffect function running')

//     let readyToDispatch = false;
//     checkBoxValue.forEach((obj) => {
//       if( obj.value ) {
//         readyToDispatch = true;
//       }
//     })

//     if( readyToDispatch) {
//       let answerGiven: string[] = [];
//       checkBoxValue.forEach((obj) => {

//         if(obj.value === true) {
//           answerGiven.push(obj.label)
//           // console.log('answerGiven', answerGiven)
//           // dispatch gives error when answerG
//         }
//         if( checkBoxValue.length == (obj.id + 1)) {
//           // readyToDispatch = true;
//           dispatch(
//             answerQuestion({questionId: 4, answer: answerGiven, answered: true}),
//           );
//         }
//       })
//     }

//   }, [checkBoxValue]);

//   const onChecked = (id: number) => {
//     // This is ullas kunder logic working
//     console.log('onChecked running');
//     const tempArray = checkBoxValue;
//     let temp = tempArray.map((obj) => {
//         if (id === obj.id) {
//           return { ...obj, value: !obj.value };
//         }
//         return obj;
//       });
//     setCheckBoxValue(temp);
//     // console.log('checkBoxValue', checkBoxValue)

//   };

//   const showNoVehicleNoToast = () => {
//     ToastAndroid.show('Answer submitted successfully !', ToastAndroid.SHORT);
//   };

//   const submitAnswer = () => {
//     let answerGiven = [checked, checked1, checked2, checked3];
//     dispatch(
//       answerQuestion({questionId: 4, answer: answerGiven, answered: true}),
//     );
//     showNoVehicleNoToast();
//   };

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
//   console.log('selectedAnswer', selectedAnswer)
//   // console.log('checkBoxState in Q5',checkBoxState)
//   // console.log('checked1', checked1)

//   return (
//     <Question5ScreenView
//       question={language.questions[4]}
//       checked={checked}
//       checked1={checked1}
//       checked2={checked2}
//       checked3={checked3}
//       checkBoxValue={checkBoxValue}
//       setCheckBoxValue={setCheckBoxValue}
//       onChecked={onChecked}
//       // checkBoxState={checkBoxState}
//       selectedAnswer={selectedAnswer}
//       setChecked={setChecked}
//       setChecked1={setChecked1}
//       setChecked2={setChecked2}
//       setChecked3={setChecked3}
//       // setCheckBoxState={setCheckBoxState}
//       // handleCheckBoxState={handleCheckBoxState}
//       // handleCheckBoxPress={handleCheckBoxPress}
//       submitAnswer={submitAnswer}
//       submitTest={submitTest}
//     />
//   );
// };

// export default Question5Screen;

// ---------------------------------------------------------------------------------------

// import React, { useState, useEffect} from 'react'
// import { View, Text } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import { StackNavigationProp } from '@react-navigation/stack'
// import { StackNavigationParamList } from '../routes/StackNavigation'

// import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks'
// import { answerQuestion } from '../reduxToolKit/slices/questionsSlice'
// import { calculateResult } from '../reduxToolKit/slices/resultSlice'

// import Question5ScreenView from '../views/Question5ScreenView'

// const Question5Screen = () => {
//   const navigation = useNavigation<StackNavigationProp<StackNavigationParamList>>();
//   const language = useAppSelector((state) => state.question);
//   const selectedAnswer = language.questions[4].answerGiven;
//   const dispatch = useAppDispatch();
//   const [checked, setChecked] = useState(false);
//   const [checked1, setChecked1] = useState(false);
//   const [checked2, setChecked2] = useState(false);
//   const [checked3, setChecked3] = useState(false);
//   var checkBoxState ={
//     check0: false,
//     check1: false,
//     check2: false,
//     check3: false,
//   }

//   const handleCheckBoxState = (checkID: number, value: boolean ) => {
//     console.log('checkID and value in handleCheckBoxState', checkID, value)
//     switch (checkID) {
//       case 0: checkBoxState.check0 = value; break;
//       case 1: checkBoxState.check1 = value; break;
//       case 2: checkBoxState.check2 = value; break;
//       case 3: checkBoxState.check3 = value; break;
//     }

//   }
//   // const [checkBoxState, setCheckBoxState] = useState({
//   //   check0: false,
//   //   check1: false,
//   //   check2: false,
//   //   check3: false,
//   // });
//   // checkBoxState.check0 = true

//   // useEffect(() => {
//   //   // handleCheckBoxPress();
//   // }, [checked, checked1, checked2, checked3]);

//   const handleCheckBoxPress = () => {
//     // console.log('value in handleCheckBoxPress',value)

//     let givenAnswer = [];
//     // givenAnswer.push(checked, checked1, checked2, checked3);
//     givenAnswer.push(checkBoxState.check0, checkBoxState.check1, checkBoxState.check2, checkBoxState.check3);
//     // console.log('givenAnswer', givenAnswer)
//     // dispatch(answerQuestion({ questionId: 4, answer: givenAnswer.toString(), answered: true}));
//     dispatch(answerQuestion({ questionId: 4, answer: checkBoxState, answered: true}));
//   }
//   const calculate = () => {
//     let marksScored = 0;
//     let marksLost = 0;
//     for ( let i = 0; i < language.questions.length; i++) {
//         if( language.questions[i].answerGiven === language.questions[i].answer ) {
//             marksScored = marksScored + 20;
//         } else {
//             marksLost = marksLost - 20;
//         }
//     }
//     console.log('After calculating marks', marksScored, marksLost);
//     return { marksScored, marksLost}
// }

//   const handleButtonPress = () => {
//     dispatch(answerQuestion({ questionId: 4, answer: checkBoxState, answered: true}));
//     navigation.navigate('Result');
//     dispatch(calculateResult(calculate()));
//   }
//   // console.log('selectedAnswer', selectedAnswer)
//   console.log('checkBoxState in Q5',checkBoxState)

//   return (
//     <Question5ScreenView
//       question={language.questions[4]}
//       checked={checked}
//       checked1={checked1}
//       checked2={checked2}
//       checked3={checked3}
//       checkBoxState={checkBoxState}
//       selectedAnswer={selectedAnswer}
//       setChecked={setChecked}
//       setChecked1={setChecked1}
//       setChecked2={setChecked2}
//       setChecked3={setChecked3}
//       // setCheckBoxState={setCheckBoxState}
//       handleCheckBoxState={handleCheckBoxState}
//       handleCheckBoxPress={handleCheckBoxPress}
//       handleButtonPress={handleButtonPress}
//     />
//   )
// }

// export default Question5Screen
