import React, { Component } from 'react';
import { StyleSheet, ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { AppColor } from '../utils/StyleConstant';

export default class TestChart extends Component {
  render() {
    const widthAndHeight = 250
    const series = [50, 0.8]
    const sliceColor = [AppColor.pieGreen, AppColor.pieRed]

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          {/* <Text style={styles.title}>Basic</Text> */}
          {/* <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          /> */}
          <Text style={styles.title}>Doughnut</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});