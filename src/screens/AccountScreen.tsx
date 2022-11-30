import React from 'react';
import { View } from 'react-native';
import { StyleAccountTheme } from '../theme/AccountTheme';

export const AccountScreen = () => {
  return (
    <View style={StyleAccountTheme.container}>
      <View style={StyleAccountTheme.circle} />
      <View style={StyleAccountTheme.screenContainer} />
      <View style={StyleAccountTheme.balanceContainer} />
      <View style={StyleAccountTheme.movementContainer} />
    </View>
  );
};
