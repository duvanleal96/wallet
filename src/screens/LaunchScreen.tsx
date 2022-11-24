import React from 'react';
import { Text, View } from 'react-native';
import LogoLaunch from '../components/atoms/LogoLaunch';
import { styles } from '../theme/LaunchTheme';

const LaunchScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <LogoLaunch customStyle={styles.logo} size={144} />
        <Text style={styles.title}>My App</Text>
      </View>
    </View>
  );
};
export default LaunchScreen;
