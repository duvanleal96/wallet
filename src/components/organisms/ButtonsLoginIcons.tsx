import { View } from 'react-native';
import React from 'react';
import { stylesLoginUser } from '../../theme/LoginUserTheme';
import { AuthButton } from '../atoms/AuthButton';

export const ButtonsLoginIcons = () => {
  return (
    <View style={stylesLoginUser.formContainer}>
      <AuthButton icon="google" text="Sign in with Google" />
      <AuthButton icon="apple" text="Sign in with Apple" />
    </View>
  );
};