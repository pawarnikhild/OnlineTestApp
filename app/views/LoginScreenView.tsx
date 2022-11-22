import React, { useState} from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

import { RadioButton } from 'react-native-paper';

import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

import GlobleStyles from '../utils/GlobleStyles';
import { AppColor } from '../utils/StyleConstant';
import LoginScreenStyle from '../styles/LoginScreenStyle';

type LoginScreenViewProps = {
  name: string,
  email: string,
  phoneNo: string,
  preferedLanguage: string
  setName: (active: string) => string,
  setEmail: (active: string) => string,
  setPhoneNo: (active: string) => string,
  setPreferedLanguage: (active: string) => string,
  handleButtonPress: () => void
}

const LoginScreenView = (props: LoginScreenViewProps) => {
  const { name, email, phoneNo, preferedLanguage, setName, setEmail, setPhoneNo, setPreferedLanguage, handleButtonPress } = props;


  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar/>
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
        keyboard='numeric'
        value={phoneNo}
        onChangeText={text => {
          setPhoneNo(text);
        }}
      />
      <Text style={LoginScreenStyle.radioButtonText}>Which language do you prefer :</Text>
      {/* <View style={LoginScreenStyle.radioButtonView}>
        <RadioButton
          value="JavaScript"
          status={ preferedLanguage === 'JavaScript' ? 'checked' : 'unchecked' }
          onPress={() => setPreferedLanguage('JavaScript')}
        />
        <Text style={LoginScreenStyle.radioButtonText}>JavaScript</Text>
      </View>
      <View style={LoginScreenStyle.radioButtonView}>
        <RadioButton
          value="PHP"
          status={ preferedLanguage === 'TypeScript' ? 'checked' : 'unchecked' }
          onPress={() => setPreferedLanguage('TypeScript')}
        />
        <Text style={LoginScreenStyle.radioButtonText}>TypeScript</Text>
      </View>
      <View style={LoginScreenStyle.radioButtonView}>
        <RadioButton
          value="Java"
          status={ preferedLanguage === 'Java' ? 'checked' : 'unchecked' }
          onPress={() => setPreferedLanguage('Java')}
        />
        <Text style={LoginScreenStyle.radioButtonText}>Java</Text>
      </View> */}
      <View style={LoginScreenStyle.radioButtonView}>
      <RadioButton.Group onValueChange={value => setPreferedLanguage(value)} value={preferedLanguage}>
        <RadioButton.Item label="JavaScript" value="JavaScript" />
        <RadioButton.Item label="Java" value="Java" />
        <RadioButton.Item label="PHP" value="PHP" />
      </RadioButton.Group>

      </View>
      
      <CustomButton
        title='SUBMIT'
        // color={AppColor.buttonColor}
        style={LoginScreenStyle.customButton}
        onPress={handleButtonPress}

      />

       {/* <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      ><Text>Java</Text></RadioButton> */}
      {/* <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /> */}
      {/* <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <View style={{ flex: 4, alignSelf: 'center' }}>
                  <Text>First</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                  />
                </View>
</View> */}
    </SafeAreaView>
  )
}

export default LoginScreenView

const styles = StyleSheet.create({})