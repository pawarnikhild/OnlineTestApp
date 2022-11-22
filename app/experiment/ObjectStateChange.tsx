import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import ObjectStateChangeView from './ObjectStateChangeView';

const ObjectStateChange = () => {
    const [checkBoxState, setCheckBoxState] = useState({
        check0: false,
        check1: false,
        check2: false,
        check3: false,
      });
    

    const changeState = () => {
        let value = { check1: true};
        let localObject = {...checkBoxState, ...value} 
        setCheckBoxState(localObject);

    }

  return (
      <ObjectStateChangeView
        checkBoxState={checkBoxState}
        setCheckBoxState={setCheckBoxState}
        changeState={changeState}
        />
    // <View>
    //   <Text>lkfdjl;kasjd;fljasdkfjl</Text>
    // </View>
  )
}

export default ObjectStateChange

const styles = StyleSheet.create({})