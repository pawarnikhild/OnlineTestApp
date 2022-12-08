// -------------------------------------------------------------------------------------
// 1) With the help of a button -
// -------------------------------------------------------------------------------------

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
    id: number,
    title: string,
    options: string[],
    answer: string,
    answered: false,
    answerGiven: string,
  },
    checkBoxState: {
    id: number,
    value: boolean,
    label: string
  } [],
  selectedAnswer: string,
  handleCheckBoxState: (active: number) => void,
  submitAnswer: () => void,
  submitTest: () => void,
};

const Question5ScreenView = (props: Question5ScreenViewProps) => {
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
      {checkBoxState.map((item, index: number) => (
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



// -------------------------------------------------------------------------------------
// 2) With the help of useEffect hook -
// -------------------------------------------------------------------------------------

// import React from 'react';
// import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
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
//   checkBoxState: {
//     id: number,
//     value: boolean,
//     label: string
//   } [],
//   handleCheckBoxState: (active: number) => void
//   printAnswerChange: (active: string) => void,
//   submitTest: () => void
// };

// const Question5ScreenView = (props: Question5ScreenViewProps) => {
//   const {
//     question,
//     checkBoxState,
//     handleCheckBoxState,
//     printAnswerChange,
//     submitTest,
//   } = props;

//   return (
//     <SafeAreaView style={GlobleStyles.appContainer}>
//       <StatusBar />
//       <CustomNavigationButtons style={{marginTop: 10}} />
//       <Text style={GlobleStyles.questionText}>{question.title}</Text>
//       {
//         checkBoxState.map((item, index: number) => (
//           <View style={Question5ScreenStyle.checkBoxView} key={index}>
//           <CheckBox
//             value={item.value}
//             onValueChange={value => {
//               handleCheckBoxState(item.id);
//               // printAnswerChange(); // This gives late result
//             }}
//           />
//           <Text style={Question5ScreenStyle.checkBoxText}>{item.label}</Text>
//         </View>
//         ))
//       }
//       <View style={Question5ScreenStyle.bottomContainer}>
//         <CustomButton
//           title="SUBMIT TEST"
//           color={AppColor.buttonColor}
//           // textColor={AppColor.white}
//           style={Question5ScreenStyle.submitTestButton}
//           onPress={submitTest}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Question5ScreenView;
