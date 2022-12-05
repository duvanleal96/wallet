import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './src/navigation/NavigationDrawer';
import { AuthContextProvider } from './src/context/AuthContext';
import { Provider } from 'react-redux';
import { ConfigStorage } from './src/redux/storage/ConfigStore';

export const App = () => {
  return (
    <Provider store={ConfigStorage}>
      <AuthContextProvider>
        <NavigationContainer>
          <NavigationDrawer />
        </NavigationContainer>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
