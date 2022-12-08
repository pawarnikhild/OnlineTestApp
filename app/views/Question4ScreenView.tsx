// -------------------------------------------------------------------------------------
// 1) With the help of a button -
// -------------------------------------------------------------------------------------

import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import DragAndDrop from 'volkeno-react-native-drag-drop';

import CustomNavigationButtons from '../components/CustomNavigationButtons';
import CustomButton from '../components/CustomButton';

import GlobleStyles from '../utils/GlobleStyles';
import Question4ScreenStyle from '../styles/Question4ScreenStyle';

type Question4ScreenViewProps = {
  question: {
    id: number,
    title: string,
    options: string[],
    answer: string
    answered: false,
    answerGiven: string
  },
  options: []
  answerZones: []
  selectedAnswer: string,
  setOptions: (active: []) => void
  setAnswerZones: (active: []) => void
  printAnswerChange: () => void
  submitAnswer: () => void
}

const Question4ScreenView = (props: Question4ScreenViewProps) => {
  const {
    question,
    options,
    answerZones,
    selectedAnswer,
    setOptions,
    setAnswerZones,
    printAnswerChange,
    submitAnswer
  } = props;

  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar />
      <CustomNavigationButtons />
      <Text style={Question4ScreenStyle.questionText}>{question.title} </Text>
      <DragAndDrop
        style={Question4ScreenStyle.container}
        contentContainerStyle={Question4ScreenStyle.contentContainerStyle}
        itemKeyExtractor={item => item.id}
        zoneKeyExtractor={zone => zone.id}
        zones={answerZones}
        items={!selectedAnswer.length ? options : []}
        maxItemsPerZone={1}
        itemsContainerStyle={Question4ScreenStyle.itemsContainerStyle}
        zonesContainerStyle={Question4ScreenStyle.zonesContainerStyle}
        onMaj={(answerZones: any, options: any) => {
          setOptions(options);
          setAnswerZones(answerZones);
          // printAnswerChange();
        }}
        itemsInZoneStyle={Question4ScreenStyle.itemsInZoneStyle}
        renderZone={(zone, children, hover) => {
          return (
            <View
              style={{
                ...Question4ScreenStyle.dragZoneStyle,
                backgroundColor: hover ? '#E2E2E2' : '#FFF',
              }}>
              <Text style={Question4ScreenStyle.dragZoneTextStyle}>
                {zone.text}
              </Text>
              {children}
            </View>
          );
        }}
        renderItem={item => {
          return (
            <View style={Question4ScreenStyle.dragItemStyle}>
              <Text style={Question4ScreenStyle.dragItemTextStyle}>
                {item.text}
              </Text>
            </View>
          );
        }}
      />
      <CustomButton
        title='SUBMIT ANSWER'
        style={Question4ScreenStyle.customButton}
        onPress={submitAnswer}
      />
    </SafeAreaView>
  );
};

export default Question4ScreenView;



// -------------------------------------------------------------------------------------
// 2) With the help of useEffect hook -
// -------------------------------------------------------------------------------------

// import React from 'react';
// import { SafeAreaView, StatusBar, Text, View } from 'react-native';
// import DragAndDrop from 'volkeno-react-native-drag-drop';

// import CustomNavigationButtons from '../components/CustomNavigationButtons';
// import CustomButton from '../components/CustomButton';

// import GlobleStyles from '../utils/GlobleStyles';
// import Question4ScreenStyle from '../styles/Question4ScreenStyle';

// type Question4ScreenViewProps = {
//   question: {
//     id: number,
//     title: string,
//     options: string[],
//     answer: string
//     answered: false,
//     answerGiven: string
//   },
//   options: []
//   answerZones: []
//   selectedAnswer: string,
//   setOptions: (active: []) => void
//   setAnswerZones: (active: []) => void
//   printAnswerChange: () => void
//   submitAnswer: () => void
// }

// const Question4ScreenView = (props: Question4ScreenViewProps) => {
//   const {
//     question,
//     options,
//     answerZones,
//     setOptions,
//     setAnswerZones,
//     printAnswerChange,
//   } = props;

//   return (
//     <SafeAreaView style={GlobleStyles.appContainer}>
//       <StatusBar />
//       <CustomNavigationButtons />
//       <Text style={Question4ScreenStyle.questionText}>{question.title} </Text>
//       <DragAndDrop
//         style={Question4ScreenStyle.container}
//         contentContainerStyle={Question4ScreenStyle.contentContainerStyle}
//         itemKeyExtractor={item => item.id}
//         zoneKeyExtractor={zone => zone.id}
//         zones={answerZones}
//         items={options}
//         maxItemsPerZone={1}
//         itemsContainerStyle={Question4ScreenStyle.itemsContainerStyle}
//         zonesContainerStyle={Question4ScreenStyle.zonesContainerStyle}
//         onMaj={(answerZones: any, options: any) => {
//           setOptions(options);
//           setAnswerZones(answerZones);
//           // printAnswerChange(); // This function is here to see immediate result of state change
//           // which is sometimes late due asynchonous nature of setState functions hence it can
//           // create mess.
//           // If this function is performed in model screen(globally) then it always gived right result.
//         }}
//         itemsInZoneStyle={Question4ScreenStyle.itemsInZoneStyle}
//         renderZone={(zone, children, hover) => {
//           return (
//             <View
//               style={{
//                 ...Question4ScreenStyle.dragZoneStyle,
//                 backgroundColor: hover ? '#E2E2E2' : '#FFF',
//               }}>
//               <Text style={Question4ScreenStyle.dragZoneTextStyle}>
//                 {zone.text}
//               </Text>
//               {children}
//             </View>
//           );
//         }}
//         renderItem={item => {
//           return (
//             <View style={Question4ScreenStyle.dragItemStyle}>
//               <Text style={Question4ScreenStyle.dragItemTextStyle}>
//                 {item.text}
//               </Text>
//             </View>
//           );
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// export default Question4ScreenView;
