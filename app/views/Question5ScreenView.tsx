import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import CustomNavigationButtons from '../components/CustomNavigationButtons';
import CustomButton from '../components/CustomButton';

import GlobleStyles from '../utils/GlobleStyles';
import Question5ScreenStyle from '../styles/Question5ScreenStyle';
import { AppColor } from '../utils/StyleConstant';

type Question5ScreenViewProps = {
  question: {
    id: number;
    title: string;
    options: string[];
    answer: string;
    answered: false;
    answerGiven: string;
  };
  checkBoxState: {
    check0: boolean;
    check1: boolean;
    check2: boolean;
    check3: boolean;
  };
  selectedAnswer: string;
  handleCheckBoxState: (active: number) => void;
  submitAnswer: () => void;
  submitTest: () => void;
};

const Question5ScreenView = (props: any) => {
  const {
    question,
    checkBoxState,
    handleCheckBoxState,
    submitAnswer,
    submitTest,
  } = props;

  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar />
      <CustomNavigationButtons style={{ marginTop: 10 }} />
      <Text style={GlobleStyles.questionText}>{question.title}</Text>

      {checkBoxState.map(
        (item: { id: number; value: boolean; label: string }, index: number) => (
          <View style={Question5ScreenStyle.checkBoxView} key={index}>
            <CheckBox
              value={item.value}
              onValueChange={value => {
                handleCheckBoxState(item.id);
                // handleCheckBoxState1(item.id);
              }}
            />
            <Text style={Question5ScreenStyle.checkBoxText}>{item.label}</Text>
          </View>
        ),
      )}
      <View style={Question5ScreenStyle.bottomContainer}>
        <CustomButton title="SUBMIT ANSWER" onPress={submitAnswer} />
        <CustomButton
          title="SUBMIT TEST"
          color={AppColor.darkBlue}
          // textColor={AppColor.white}
          style={Question5ScreenStyle.submitTestButton}
          onPress={submitTest}
        />
      </View>
    </SafeAreaView>
  );
};

export default Question5ScreenView;

// ---------------------------------------------------------------------------------------

// import React from 'react';
// import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
// // import {Checkbox} from 'react-native-paper';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
// import CheckBox from '@react-native-community/checkbox';

// import CustomNavigationButtons from '../components/CustomNavigationButtons';
// import CustomButton from '../components/CustomButton';

// import GlobleStyles from '../utils/GlobleStyles';
// import Question5ScreenStyle from '../styles/Question5ScreenStyle'
// import { AppColor } from '../utils/StyleConstant';

// type Question5ScreenViewProps = {
//   question: {
//     id: number,
//     title: string,
//     options: string[],
//     answer: string
//     answered: false,
//     answerGiven: string
//   },
//   checked: boolean,
//   checked1: boolean,
//   checked2: boolean,
//   checked3: boolean,
//   checkBoxValue: any,
//   setCheckBoxValue: (active: []) => void
//   handleCheckBoxState: (active: number) => void
//   checkBoxState: {
//     check0: boolean,
//     check1: boolean,
//     check2: boolean,
//     check3: boolean,
//   },
//   selectedAnswer: string,
//   setChecked: (active: boolean) => void,
//   setChecked1: (active: boolean) => void,
//   setChecked2: (active: boolean) => void,
//   setChecked3: (active: boolean) => void,
//   setCheckBoxState: (active: object) => void,
//   handleCheckBoxPress: ({}) => void,
//   handleAnswerChange: (active: string) => void,
//   submitAnswer: () => void,
//   submitTest: () => void
// };

// const Question5ScreenView = (props: any) => {
//   const {
//     question,
//     checked,
//     checked1,
//     checked2,
//     checked3,
//     checkBoxState,
//     selectedAnswer,
//     setChecked,
//     setChecked1,
//     setChecked2,
//     setChecked3,
//     checkBoxValue,
//     handleCheckBoxState,
//     setCheckBoxValue,
//     setCheckBoxState,
//     // handleCheckBoxState,
//     handleAnswerChange,
//     submitTest,
//     submitAnswer,
//     handleCheckBoxPress,
//   } = props;

//   return (
//     <SafeAreaView style={GlobleStyles.appContainer}>
//       <StatusBar />
//       <CustomNavigationButtons style={{marginTop: 10}} />
//       <Text style={GlobleStyles.questionText}>{question.title}</Text>

//       {
//         checkBoxValue.map((item: {id: number, value: boolean}, index: number) => (
//           <View style={Question5ScreenStyle.checkBoxView} key={index}>

//           <CheckBox
//             value={item.value}
//             onValueChange={value => {
//               handleCheckBoxState(item.id);
//               // handleCheckBoxState1(item.id);
//             }}
//           />
//           <Text style={Question5ScreenStyle.checkBoxText}>{item.label}</Text>
//         </View>
//         ))
//       }

//       {/* <View style={Question5ScreenStyle.checkBoxView}>
//         <CheckBox
//           value={checked3}
//           onValueChange={() => {
//             setChecked3(!checked3);
//             // handleCheckBoxPress();
//           }}
//         />
//         <Text style={Question5ScreenStyle.checkBoxText}>{question.options[3]}</Text>
//       </View> */}

//       {/* <View style={Question5ScreenStyle.checkBoxView}>
//         <CheckBox
//           value={checked}
//           onValueChange={() => {
//             setChecked(!checked);
//             // handleCheckBoxPress();
//           }}
//         />
//         <Text style={Question5ScreenStyle.checkBoxText}>{question.options[0]}</Text>
//       </View>
//       <View style={Question5ScreenStyle.checkBoxView}>
//         <CheckBox
//           value={checked1}
//           onValueChange={(value) => {
//             setChecked1(!checked1);
//             // setChecked1(value);
//             // console.log('value in checkbox2',value)
//             // console.log('checked!',checked1)
//             // console.log('checkBoxState.check1',checkBoxState.check1)
//             // checkBoxState.check1 = value;
//             // let localObject = {...checkBoxState, ...{check1: value}}
//             // checkBoxState = {...checkBoxState, ...{check1: value}}
//             // setCheckBoxState( localObject )
//             // console.log('After changing checkBoxState.check1',checkBoxState.check1)
//             // handleCheckBoxPress();
//           }}
//         />
//         <Text style={Question5ScreenStyle.checkBoxText}>{question.options[1]}</Text>
//       </View>
//       <View style={Question5ScreenStyle.checkBoxView}>
//         <CheckBox
//           value={checked2}
//           // value={checkBoxState.check2}
//           onValueChange={(value) => {
//             setChecked2(!checked2);
//             // handleCheckBoxPress();
//             // handleCheckBoxState(2, value)
//           }}
//         />
//         <Text style={Question5ScreenStyle.checkBoxText}>{question.options[2]}</Text>
//       </View>
//       <View style={Question5ScreenStyle.checkBoxView}>
//         <CheckBox
//           value={checked3}
//           onValueChange={() => {
//             setChecked3(!checked3);
//             // handleCheckBoxPress();
//           }}
//         />
//         <Text style={Question5ScreenStyle.checkBoxText}>{question.options[3]}</Text>
//       </View> */}

//       <View style={Question5ScreenStyle.bottomContainer}>
//         {/* <CustomButton
//           title="SUBMIT ANSWER"
//           onPress={submitAnswer}
//         /> */}

//         <CustomButton
//           title="SUBMIT TEST"
//           color={AppColor.darkBlue}
//           // textColor={AppColor.white}
//           style={Question5ScreenStyle.submitTestButton}
//           onPress={submitTest}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Question5ScreenView;

// ---------------------------------------------------------------------------------------

// import React from 'react';
// import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
// import {Checkbox} from 'react-native-paper';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
// import CheckBox from '@react-native-community/checkbox';

// import CustomNavigationButtons from '../components/CustomNavigationButtons';
// import CustomButton from '../components/CustomButton';

// import GlobleStyles from '../utils/GlobleStyles';
// import Question5ScreenStyle from '../styles/Question5ScreenStyle'

// type Question5ScreenViewProps = {
//   question: {
//     id: number,
//     title: string,
//     options: string[],
//     answer: string
//     answered: false,
//     answerGiven: string
//   },
//   checked: boolean,
//   checked1: boolean,
//   checked2: boolean,
//   checked3: boolean,
//   checkBoxState: {
//     check0: boolean,
//     check1: boolean,
//     check2: boolean,
//     check3: boolean,
//   },
//   selectedAnswer: string,
//   setChecked: (active: boolean) => void,
//   setChecked1: (active: boolean) => void,
//   setChecked2: (active: boolean) => void,
//   setChecked3: (active: boolean) => void,
//   setCheckBoxState: (active: object) => void,
//   handleCheckBoxPress: ({}) => void,
//   handleAnswerChange: (active: string) => void,
//   handleButtonPress: () => void
// };

// const Question5ScreenView = (props: Question5ScreenViewProps) => {
//   const {
//     question,
//     checked,
//     checked1,
//     checked2,
//     checked3,
//     checkBoxState,
//     selectedAnswer,
//     setChecked,
//     setChecked1,
//     setChecked2,
//     setChecked3,
//     setCheckBoxState,
//     handleCheckBoxState,
//     handleAnswerChange,
//     handleButtonPress,
//     handleCheckBoxPress,
//   } = props;

//   return (
//     <SafeAreaView style={GlobleStyles.appContainer}>
//       <StatusBar />
//       <CustomNavigationButtons style={{marginTop: 10}} />
//       <Text style={GlobleStyles.questionText}>5. {question.title}</Text>
//       <View style={GlobleStyles.checkBoxView}>
//         <CheckBox
//           value={checked}
//           onValueChange={() => {
//             setChecked(!checked);
//             handleCheckBoxPress();
//           }}
//         />
//         <Text style={GlobleStyles.checkBoxText}>{question.options[0]}</Text>
//       </View>
//       <View style={GlobleStyles.checkBoxView}>
//         <CheckBox
//           value={checked1}
//           onValueChange={(value) => {
//             // setChecked1(!checked1);
//             setChecked1(value);
//             console.log('value in checkbox2',value)
//             // console.log('checkBoxState.check1',checkBoxState.check1)
//             // checkBoxState.check1 = value;
//             // let localObject = {...checkBoxState, ...{check1: value}}
//             // checkBoxState = {...checkBoxState, ...{check1: value}}
//             // setCheckBoxState( localObject )
//             // console.log('After changing checkBoxState.check1',checkBoxState.check1)
//             // handleCheckBoxPress();
//           }}
//         />
//         <Text style={GlobleStyles.checkBoxText}>{question.options[1]}</Text>
//       </View>
//       <View style={GlobleStyles.checkBoxView}>
//         <CheckBox
//           value={checkBoxState.check2}
//           onValueChange={(value) => {
//             // setChecked2(!checked2);
//             // handleCheckBoxPress();
//             handleCheckBoxState(2, value)
//           }}
//         />
//         <Text style={GlobleStyles.checkBoxText}>{question.options[2]}</Text>
//       </View>
//       <View style={GlobleStyles.checkBoxView}>
//         <CheckBox
//           value={checked3}
//           onValueChange={() => {
//             setChecked3(!checked3);
//             handleCheckBoxPress();
//           }}
//         />
//         <Text style={GlobleStyles.checkBoxText}>{question.options[3]}</Text>
//       </View>

//       <View style={Question5ScreenStyle.bottomContainer}>
//         <CustomButton
//           title="SUBMIT TEST & SEE RESULT"
//           // color={AppColor.buttonColor}
//           style={Question5ScreenStyle.customButton}
//           onPress={handleButtonPress}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Question5ScreenView;
