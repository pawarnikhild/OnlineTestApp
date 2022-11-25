import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../models/LoginScreen';
import Question1Screen from '../models/Question1Screen';
import Question2Screen from '../models/Question2Screen';
import Question3Screen from '../models/Question3Screen';
import Question4Screen from '../models/Question4Screen';
import Question5Screen from '../models/Question5Screen';
import ResultScreen from '../models/ResultScreen';

const Stack = createStackNavigator<StackNavigationParamList>();

export type StackNavigationParamList = {
  Login: undefined;
  Question1: undefined;
  Question2: undefined;
  Question3: undefined;
  Question4: undefined;
  Question5: undefined;
  Result: undefined;
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question1"
          component={Question1Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question2"
          component={Question2Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question3"
          component={Question3Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question4"
          component={Question4Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question5"
          component={Question5Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation