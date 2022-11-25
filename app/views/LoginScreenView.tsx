import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

import GlobleStyles from '../utils/GlobleStyles';
import { AppColor } from '../utils/StyleConstant';
import LoginScreenStyle from '../styles/LoginScreenStyle';

type LoginScreenViewProps = {
  name: string;
  email: string;
  phoneNo: string;
  preferedLanguage: string;
  setName: (active: string) => string;
  setEmail: (active: string) => string;
  setPhoneNo: (active: string) => string;
  setPreferedLanguage: (active: string) => string;
  handleButtonPress: () => void;
};

const LoginScreenView = (props: LoginScreenViewProps) => {
  const {
    name,
    email,
    phoneNo,
    preferedLanguage,
    setName,
    setEmail,
    setPhoneNo,
    setPreferedLanguage,
    handleButtonPress,
  } = props;

  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar />
      <Text style={LoginScreenStyle.heading}>Candidate Information</Text>
      <CustomTextInput
        style={LoginScreenStyle.customTextInput}
        placeholder="Enter your name"
        placeholderColor={AppColor.grey}
        value={name}
        onChangeText={text => {
          setName(text);
        }}
      />
      <CustomTextInput
        style={LoginScreenStyle.customTextInput}
        placeholder="Enter your email"
        placeholderColor={AppColor.grey}
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <CustomTextInput
        style={LoginScreenStyle.customTextInput}
        placeholder="Enter your phone number"
        placeholderColor={AppColor.grey}
        keyboard="numeric"
        value={phoneNo}
        onChangeText={text => {
          setPhoneNo(text);
        }}
      />
      <Text style={LoginScreenStyle.normalText}>
        Which language do you prefer :
      </Text>
      <View style={LoginScreenStyle.radioButtonView}>
        <RadioButton.Group
          onValueChange={value => setPreferedLanguage(value)}
          value={preferedLanguage}>
          <RadioButton.Item label="मराठी" value="मराठी" />
          <RadioButton.Item label="हिंदी" value="हिंदी" />
          <RadioButton.Item label="English" value="English" />
        </RadioButton.Group>
      </View>
      <CustomButton
        title="SUBMIT"
        style={LoginScreenStyle.customButton}
        onPress={handleButtonPress}
      />
    </SafeAreaView>
  );
};

export default LoginScreenView;
