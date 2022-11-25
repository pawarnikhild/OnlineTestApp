import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart';
// import Pie from 'react-native-pie' // This is working but gives underline for pie

import CustomButton from '../components/CustomButton';

import GlobleStyles from '../utils/GlobleStyles'
import { AppColor } from '../utils/StyleConstant';
import ResultScreenStyle from '../styles/ResultScreenStyle'

type ResultScreenViewProps = {
  result: {'marksLost': number, 'marksScored': number, 'totalMarks': number}
  sections: [{percentage: number, color: string}, {percentage: number, color: string}],
  navigateToLoginScreen: () => void
}

const ResultScreenView = (props: ResultScreenViewProps ) => {
  const { result, sections, navigateToLoginScreen } = props;
  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar/>
      <Text style={ResultScreenStyle.heading}>Here is your result</Text>
      <PieChart
        widthAndHeight={250}
        series={[result.marksScored, result.marksLost]}
        // series={[100, 100]}
        sliceColor={[AppColor.pieGreen, AppColor.pieRed]}
        doughnut={true}
        coverRadius={0.45}
        coverFill={'#FFF'}
        style={ResultScreenStyle.pieChart}
      />
      {/* <View style={ResultScreenStyle.pieChart}>
        <Pie
          radius={120}
          innerRadius={50}
          sections={sections}
          dividerSize={2}
          strokeCap={'butt'}
        />
      </View>       */}
      <Text style={ResultScreenStyle.text}>Marks scored: {result.marksScored}</Text>
      <Text style={ResultScreenStyle.text}>Marks lost: {result.marksLost}</Text>
      <Text style={ResultScreenStyle.text}>Total marks: {result.totalMarks} </Text>
      <CustomButton
        title='GO TO LOGIN SCREEN'
        style={ResultScreenStyle.customButton}
        onPress={navigateToLoginScreen}
      />
    </SafeAreaView>
  )
}

export default ResultScreenView

const styles = StyleSheet.create({})