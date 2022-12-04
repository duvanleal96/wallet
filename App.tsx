import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './src/navigation/NavigationDrawer';
import { AuthContextProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <NavigationDrawer />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
