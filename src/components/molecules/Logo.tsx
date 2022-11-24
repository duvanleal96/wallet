import { StyleSheet, View } from 'react-native';
import React from 'react';
import LogoLaunch from '../atoms/LogoLaunch';
import LogoTypeLogin from '../atoms/LogoTypeLogin';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <LogoLaunch size={60} />
      <LogoTypeLogin />
    </View>
  );
};
const styles = StyleSheet.create({
  logoContainer: {
    flex: 4,
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
});

export default Logo;
