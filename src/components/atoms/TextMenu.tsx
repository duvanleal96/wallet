import React, { useContext } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';

export const TextMenu = () => {
  const { client } = useSelector((state: any) => state.client);
  const { userData } = useContext(AuthContext);
  return (
    <Text style={styleMenuTheme.textAccountName}>
      {userData ? client.name : null}
    </Text>
  );
};
