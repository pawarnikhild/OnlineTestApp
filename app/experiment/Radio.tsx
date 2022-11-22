import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const MyComponent = () => {
  const [checked, setChecked] = React.useState('first');
  const [value, setValue] = React.useState('first');


  return (
    <View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />

    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item style={{ width: '40%'}} label="First item" value="first" />
      <RadioButton.Item label="Second item" value="second" />
    </RadioButton.Group>
    </View>
  );
};

export default MyComponent;