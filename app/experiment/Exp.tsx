import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstant';

const Exp = () => {
  const [phoneNo, setPhoneNo] = useState<number | any>(0);
  console.log('phoneNo', phoneNo);
  console.log('Type of phone no', typeof phoneNo);
  // for(var i = 0; i < phoneNo; i++)
  return (
    <View>
      <Text>Exp</Text>
      <Text>{phoneNo}</Text>
      <TextInput
        style={styles.CustomTextInput}
        placeholder="Type something"
        placeholderTextColor="grey"
        value={phoneNo}
        keyboardType="number-pad"
        onChangeText={text => {
          setPhoneNo(text);
        }}
      />
    </View>
  );
};

export default Exp;

const styles = StyleSheet.create({
  CustomTextInput: {
    // height: 40,
    // padding: 5,
    backgroundColor: AppColor.white,
    borderWidth: 2,
    borderColor: AppColor.black,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: FontSize.small,
  },
});

const initialState = {
  JavaScript: {
    Question1: {
      title: 'Javascript is an _____ language?',
      options: {
        optioin1: 'Object-oriented',
        optioin2: 'Object-based',
        optioin3: 'Procedural',
        optioin4: 'None of above',
      },
      answered: false,
      answer: '',
    },
    Question2: {
      title: 'Javascript is an _____ language?',
      options: {
        optioin1: 'Object-oriented',
        optioin2: 'Object-based',
        optioin3: 'Procedural',
        optioin4: 'None of above',
      },
      answered: false,
      answer: '',
    },
  },
  TypeScript: {},
};

const initialStateArary = {
  JavaScript: {
    Question1: {
      title: 'Javascript is an _____ language?',
      options: {
        optioin1: 'Object-oriented',
        optioin2: 'Object-based',
        optioin3: 'Procedural',
        optioin4: 'None of above',
      },
      answered: false,
      answer: '',
    },
    Question2: {
      title: 'Javascript is an _____ language?',
      options: {
        optioin1: 'Object-oriented',
        optioin2: 'Object-based',
        optioin3: 'Procedural',
        optioin4: 'None of above',
      },
      answered: false,
      answer: '',
    },
  },
  TypeScript: {},
};


var q4 = {
  id: 3,
  title: `Match the follwing -\n   1) ceil():\n   2) floor():\n   3) write():\n   4) focus():\n   5) trim():`,
  options: [
    'Returns the next integer less than or equal to given number.',
    'Returns next integer greater than or equal to given number.',
    'Removes white spaces from both sides of string.',
    'Sets focus to current window.',
    'Writes HTML expression or JavaScript code to a document.',
  ],
  answer: 'Object-oriented',
  answered: false,
  answerGiven: '',
};

var qq4 = {
    id: 3,
    title: `Match the follwing -
     1) Returns the next integer less than or equal to given number.
     2) Returns next integer greater than or equal to given number.
     3) Removes white spaces from both sides of string.
     4) Sets focus to current window.
     5) Writes HTML expression or JavaScript code to a document.`,
  //   ) :\n   4) :\n   5) :`,
    options: [
      'ceil()',
      'floor()',
      'write()',
      'focus()',
      'trim()',
    ],
    answer: 'Object-oriented',
    answered: false,
    answerGiven: '',
  };
