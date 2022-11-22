import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackNavigationParamList } from '../routes/StackNavigation'
import { useAppSelector, useAppDispatch } from '../reduxToolKit/hooks'
import { addUser } from '../reduxToolKit/slices/userSlice'
import { selectLanguage } from '../reduxToolKit/slices/questionsSlice'
import { allQuestions } from '../data/allQuestions'

import LoginScreenView from '../views/LoginScreenView'

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavigationParamList, 'Login'>>();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [preferedLanguage, setPreferedLanguage] = useState('');

  const clearState = () => {
    setName('');
    setEmail('');
    setPhoneNo('');
    setPreferedLanguage('');
  }

  const handleButtonPress = () => {
    if( name && email && phoneNo && preferedLanguage ) {
      dispatch(addUser({
        name:name,
        email: email,
        phoneNo: phoneNo,
        preferedLanguage: preferedLanguage
      }));
      // let language = allQuestions.filter(obj => obj.language === preferedLanguage )
      let language = allQuestions.find(obj => obj.language === preferedLanguage )
      // console.log('Selected lng',language)
      dispatch(selectLanguage(language))
      navigation.navigate('Question1');
      clearState();
    } else {
      alert('You have not entered all information !')
    }
    
  }
  // console.log(preferedLanguage)
  
  return (
    <LoginScreenView
      preferedLanguage={preferedLanguage}
      name={name}
      email={email}
      phoneNo={phoneNo}
      preferedLanguage={preferedLanguage}
      setName={setName}
      setEmail={setEmail}
      setPhoneNo={setPhoneNo}
      setPreferedLanguage={setPreferedLanguage}
      handleButtonPress={handleButtonPress}
    />
  )
}

export default LoginScreen