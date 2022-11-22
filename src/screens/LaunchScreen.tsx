import React from 'react';
import { StatusBar, View } from 'react-native';
import Logo from '../components/atomos/Logo';
import { styles } from '../theme/LaunchTheme';

const LaunchScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Logo />
    </View>
  );
};
export default LaunchScreen;
