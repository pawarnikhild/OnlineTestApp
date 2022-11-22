import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ObjectStateChangeView = (props: any) => {
   const { checkBoxState, setCheckBoxState, changeState } = props;

  return (
    <View>
      <Text>ObjectStateChangeView</Text>
      <Text>{checkBoxState.check0.toString()}</Text>
      <Text>{checkBoxState.check1.toString()}</Text>
      <Text>{checkBoxState.check2.toString()}</Text>
      <Text>{checkBoxState.check3.toString()}</Text>
      <Button title='Press me' onPress={() => {
        let value = { check1: true};
        let localObject = {...checkBoxState, ...value} 
        setCheckBoxState(localObject);
      }}/>
    </View>
  )
}

export default ObjectStateChangeView

const styles = StyleSheet.create({})