import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstant';

type CustonButtonProps = {
  title: string,
  style?: any,
  color?: string,
  textColor?: string,
  buttonDisabled?: boolean,
  onPress: () => void
};

const CustomButton = (props: CustonButtonProps) => {
  const color = props.buttonDisabled ? AppColor.grey : props.color ? props.color : AppColor.buttonColor;
  const textColor = props.textColor ? props.textColor : AppColor.white
  // console.log('buttonDisabled',props.buttonDisabled)
  return (
    <Pressable
      style={
        ({pressed}) => [
        {backgroundColor: color},
        {opacity: pressed && !props.buttonDisabled ? 0.5 : null},
        {...styles.customButton, ...props.style},
      ]
    }
      disabled={props.buttonDisabled}
      onPress={props.onPress}
    >
      <Text style={{...styles.title, color: textColor}}>{props.title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    padding: 6,
    borderRadius: 4,
    justicyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: AppColor.white,
    fontSize: FontSize.small,
  },
});
