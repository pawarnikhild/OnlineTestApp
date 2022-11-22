import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../models/LoginScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator<MainStackNavigationParamList>();

export type MainStackNavigationParamList = {
  Home: undefined;
  Parking: undefined;
  Billing: { item: {
    id: number;
    vehicleNo: any;
    timeSpent: any;
    parkingCharge: any;
  }};
};

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{title: 'Parking Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigation