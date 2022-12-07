import React from 'react'
import { View, Text } from 'react-native'
import { store } from './app/reduxToolKit/store'
import { Provider } from 'react-redux/'

import Question1Screen from './app/models/Question1Screen'
import Question2Screen from './app/models/Question2Screen'
import Question3Screen from './app/models/Question3Screen'
import Question4Screen from './app/models/Question4Screen'
import Question5Screen from './app/models/Question5Screen'
import ResultScreen from './app/models/ResultScreen'
import StackNavigation from './app/routes/StackNavigation'
import Exp from './app/experiment/Exp'
import DragDrop from './app/experiment/DragDrop'
import Radio from './app/experiment/Radio'
import Pie from './app/experiment/Pie'
import ObjectStateChange from './app/experiment/ObjectStateChange'
import MiniPie from './app/experiment/MiniPie'
import IChecBox from './app/experiment/IChecBox'

const App = () => {
  return (
    <Provider store={store}>
      {/* <MainStackNavigation/> */}
      {/* <TabNavigation/> */}
      {/* <Question1Screen/> */}
      {/* <Question2Screen/> */}
      {/* <Question3Screen/> */}
      {/* <Question4Screen/> */}
      {/* <Question5Screen/> */}
      {/* <ResultScreen/> */}
      <StackNavigation/>
      {/* <Exp /> */}
      {/* <DragDrop/> */}
      {/* <Radio /> */}
      {/* <Pie /> */}
      {/* <ObjectStateChange /> */}
      {/* <MiniPie /> */}
      {/* <IChecBox /> */}
    </Provider>
    
  )
}

export default App