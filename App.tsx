import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/LaunchTheme';
import LaunchScreen from './src/screens/LaunchScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <LaunchScreen />
    </SafeAreaView>
  );
};

export default App;
