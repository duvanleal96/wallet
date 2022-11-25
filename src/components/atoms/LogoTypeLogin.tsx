import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  size?: number;
  customStyle?: any;
}

const LogoTypeLogin = ({ size, customStyle }: Props) => {
  return (
    <Text style={getTextStyles(size)}>
      MATERIAL <Text style={style.prupleText}>2</Text> UI
    </Text>
  );
};

function getTextStyles(size?: number, customStyle?: any) {
  return size
    ? { ...style.textLogo, fontSize: size, ...customStyle }
    : stylesLoginUser.logo;
}
export default LogoTypeLogin;

const style = StyleSheet.create({
  textLogo: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Montserrat',
  },
  prupleText: {
    color: '#6202EE',
  },
})