import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  text: string;
  icon: string;
  action?: () => void;
}

export const AuthButton = ({ text, icon, action }: Props) => {
  const [src, setSrc] = useState(
    require('../../../assets/icons/google-icon.png'),
  );

  useEffect(() => {
    getIconSrc();
  });

  const getIconSrc = () => {
    switch (icon) {
      case 'google':
        setSrc(require('../../../assets/icons/google-icon.png'));
        break;

      case 'apple':
        setSrc(require('../../../assets/icons/mac-icon.png'));
        break;
    }
  };
  return (
    <TouchableOpacity
      style={stylesLoginUser.btnIcon}
      onPress={() => (action ? action() : console.log('auth'))}>
      <Image style={stylesLoginUser.icon} source={src} />
      <Text style={stylesLoginUser.btnTextIcon}>{text}</Text>
    </TouchableOpacity>
  );
};
