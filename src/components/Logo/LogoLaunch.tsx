import React from 'react';
import { Image } from 'react-native';
import { styles } from '../../theme/LaunchTheme';

interface Props {
  size?: number;
  customStyle?: any;
}

const LogoLaunch = ({ size, customStyle }: Props) => {
  return (
    <Image
      style={getLogoStyles(size, customStyle)}
      source={require('../../../assets/images/logo.png')}
    />
  );
};
function getLogoStyles(size?: number, customStyle?: any) {
  return size
    ? { ...styles.logo, width: size, height: size, ...customStyle }
    : styles.logo;
}

export default LogoLaunch;
