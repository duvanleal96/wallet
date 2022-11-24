import React from 'react';
import 'react-native-gesture-handler';
import LoginUserScreen from './src/screens/LoginUserScreen';
import { NavigationContainer } from '@react-navigation/native';
//import LaunchScreen from './src/screens/LaunchScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <LoginUserScreen />
    </NavigationContainer>
  );
};

export default App;
