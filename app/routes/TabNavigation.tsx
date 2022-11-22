import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AppColor, FontSize } from '../utils/StyleConstant'
// import { Icon } from "react-native-elements";

import LoginScreen from '../models/LoginScreen';
import Question1Screen from '../models/Question1Screen';
import ResultScreen from '../models/ResultScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {

  return (
    // <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="top"
        screenOptions={{
        //   tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarIconStyle: styles.tabBarIcon,
          tabBarLabelStyle: styles.tabBarLabel,
          // tabBarActiveTintColor: AppColor.primary,
          // tabBarInactiveTintColor: AppColor.textDisabled,
          tabBarIndicatorStyle: { color: 'red'},
          // tabBarIndicatorStyle​: styles.tabBarIndicator,
        }}
      >
        {/* <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        /> */}
        <Tab.Screen 
          name="Question1" 
          component={Question1Screen}
          options={{
            title: "Question1",
          }}
        />
        <Tab.Screen 
          name="Result"
          component={ResultScreen}
          options={{
            title: "Result",
            
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    // height: 52,
    // backgroundColor: 'red'
    
  },
  tabBarIcon: {
    // marginTop: -10,
    marginVertical: -4,
    height: 36,
    width: 36,
  },
  tabBarLabel: {
    // fontSize: FontSize.Default,
    // marginVertical: -4,
    // marginTop: -3
  },
  tabBarIndicator: {
    // backgroundColor: 'red'
  },
});
