import React from 'react';
import { Text } from 'react-native';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';

interface Props {
  size?: number;
  customStyle?: any;
}

const TextMenu = ({ size }: Props) => {
  return <Text style={getTextStyles(size)}>Duvan Leal</Text>;
};

function getTextStyles(size?: number, customStyle?: any) {
  return size
    ? { ...styleMenuTheme.textLogo, fontSize: size, ...customStyle }
    : styleMenuTheme.textLogo;
}
export default TextMenu;
