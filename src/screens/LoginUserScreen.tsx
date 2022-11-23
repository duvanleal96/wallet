import React from 'react';
import { stylesLoginUser } from '../theme/LoginUserTheme';
import { View } from 'react-native';
import LogoLogin from '../components/Logo/LogoLogin';
import TitleLogin from '../components/Title/TitleLogin';
import LoginInput from '../components/TextInput/LoginInput';
import LoginButon from '../components/Button/LoginButon';
import TitleLoginDesc from '../components/Title/TitleLoginDesc';
const LoginUserScreen = () => {
  return (
    <View style={stylesLoginUser.container}>
      <View style={stylesLoginUser.container1}>
        <LogoLogin />
        <TitleLogin />
        <TitleLoginDesc />
      </View>
      <View style={stylesLoginUser.container2}>
        <LoginInput />
        <LoginButon />
      </View>
    </View>
  );
};

export default LoginUserScreen;
