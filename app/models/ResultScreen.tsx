import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppSelector } from '../reduxToolKit/hooks';

import { StackNavigationParamList } from '../routes/StackNavigation';
import ResultScreenView from '../views/ResultScreenView';
import { AppColor } from '../utils/StyleConstant';

const ResultScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavigationParamList, 'Login'>>();
  const result = useAppSelector(state => state.result);
  const sections = [
    {
      percentage: result.marksScored,
      color: AppColor.pieGreen,
    },
    {
      percentage: result.marksLost,
      color: AppColor.pieRed,
    },
  ];

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  console.log('result on result screen', result);

  return (
    <ResultScreenView
      result={result}
      sections={sections}
      navigateToLoginScreen={navigateToLoginScreen}
    />
  );
};

export default ResultScreen;
