import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './src/navigation/NavigationDrawer';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
};

export default App;
