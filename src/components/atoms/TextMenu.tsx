import React, { useContext } from 'react';
import { Text } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';

export const TextMenu = () => {
  const { userData } = useContext(AuthContext);
  return <Text style={styleMenuTheme.textAccountName}>{userData?.name}</Text>;
};
