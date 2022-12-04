import React from 'react';
import { Image } from 'react-native';
import { styles } from '../../theme/LaunchTheme';

interface Props {
  size?: number;
  customStyle?: any;
}

const Photo = ({ size, customStyle }: Props) => {
  return (
    <Image
      style={getPhotoStyles(size, customStyle)}
      source={require('../../../assets/images/avatar.png')}
    />
  );
};
function getPhotoStyles(size?: number, customStyle?: any) {
  return size
    ? { ...styles.logo, width: size, height: size, ...customStyle }
    : styles.logo;
}

export default Photo;
