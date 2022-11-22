import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ width: 100, height: 100 }}
      source={require('../../../assets/images/logo.png')}
    />
  );
};

export default Logo;
