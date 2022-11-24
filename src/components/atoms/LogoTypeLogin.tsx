import React from 'react';
import { Text } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  size?: number;
  customStyle?: any;
}

const LogoTypeLogin = ({ size, customStyle }: Props) => {
  return (
    <Text style={getTextStyles(size)}>
      MATERIAL <Text style={stylesLoginUser.prupleText}>2</Text> UI
    </Text>
  );
};

function getTextStyles(size?: number, customStyle?: any) {
  return size
    ? { ...stylesLoginUser.textLogo, fontSize: size, ...customStyle }
    : stylesLoginUser.logo;
}
export default LogoTypeLogin;
