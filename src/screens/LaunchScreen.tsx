import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import LogoLaunch from '../components/atoms/LogoLaunch';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { styles } from '../theme/LaunchTheme';

const LaunchScreen = ({ navigation }: MyStackScreenProps) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('LoginUserScreen'), 1000);
  });
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
