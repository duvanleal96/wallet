import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginUserScreen from './src/screens/LoginUserScreen';
import { styles } from './src/theme/LaunchTheme';
//import LaunchScreen from './src/screens/LaunchScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginUserScreen />
    </SafeAreaView>
  );
};

export default App;
