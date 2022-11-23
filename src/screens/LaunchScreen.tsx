import React from 'react';
import { View } from 'react-native';
import LogoLaunch from '../components/Logo/LogoLaunch';
import TitleLaunch from '../components/Title/TitleLaunch';
import { styles } from '../theme/LaunchTheme';

const LaunchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoLaunch />
      </View>
      <TitleLaunch />
    </View>
  );
};
export default LaunchScreen;
