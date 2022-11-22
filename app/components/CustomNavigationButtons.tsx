import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackNavigationParamList } from '../routes/StackNavigation';
import { useAppDispatch, useAppSelector } from '../reduxToolKit/hooks';

import { AppColor, FontSize } from '../utils/StyleConstant';

type CustomButtonProps = {
  style?: object;
};
const CustomNavigationButtons = (props: CustomButtonProps) => {
  const navigation = useNavigation<StackNavigationProp<StackNavigationParamList>>();
  const language = useAppSelector(state => state.question);
  const [color, setColor] = useState('')
  // useEffect(() => {
  //   if(language.questions[1].answered)
  // });
  // let color = 'red';

  return (
    <View style={{ ...styles.customNavigationButtonsView, ...props.style }}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.customButton,
          backgroundColor: language.questions[0].answered
            ? AppColor.red
            : AppColor.grey,
        }}
        onPress={() => {
          console.log('CustomButton 1 pressed');
          navigation.navigate('Question1');
        }}>
        <Text style={styles.text}>{1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.customButton,
          backgroundColor: language.questions[1].answered
            ? AppColor.red
            : AppColor.grey,
        }}
        onPress={() => {
          console.log('CustomButton 2 pressed');
          navigation.navigate('Question2');
        }}>
        <Text style={styles.text}>{2}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.customButton,
          backgroundColor: language.questions[2].answered
            ? AppColor.red
            : AppColor.grey,
        }}
        onPress={() => {
          console.log('CustomButton 3 pressed');
          navigation.navigate('Question3');
        }}>
        <Text style={styles.text}>{3}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.customButton,
          backgroundColor: language.questions[3].answered
            ? AppColor.red
            : AppColor.grey,
        }}
        onPress={() => {
          console.log('CustomButton 4 pressed');
          navigation.navigate('Question4');
        }}>
        <Text style={styles.text}>{4}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.customButton,
          backgroundColor: language.questions[4].answered
            ? AppColor.red
            : AppColor.grey,
        }}
        onPress={() => {
          console.log('CustomButton 5 pressed');
          navigation.navigate('Question5');
        }}>
        <Text style={styles.text}>{5}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomNavigationButtons;

const styles = StyleSheet.create({
  customNavigationButtonsView: {
    flexDirection: 'row',
    alignSelf: 'center',
    // backgroundColor: 'green'
  },
  customButton: {
    marginHorizontal: 4,
    height: 35,
    width: 35,
    borderRadius: 20,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: FontSize.medium,
  },
});
