import { View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { stylesLoginUser } from '../../theme/LoginUserTheme';
import { AuthButton } from '../atoms/AuthButton';
import { AuthContext } from '../../context/AuthContext';
import { MyStackScreenProps } from '../../interface/MyStackScreenProps';

export const ButtonsLoginIcons = ({ navigation }: MyStackScreenProps) => {
  const { login, loggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (loggedIn) {
      console.log('estas loggeado');
    }
  }, [loggedIn, navigation]);
  return (
    <View style={stylesLoginUser.formContainer}>
      <AuthButton
        icon="google"
        text="Sign in with Google"
        action={() => login()}
      />
      <AuthButton icon="apple" text="Sign in with Apple" />
    </View>
  );
};
