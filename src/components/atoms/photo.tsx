import React, { useContext } from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';

const Photo = () => {
  const { client } = useSelector((state: any) => state.client);
  const { userData } = useContext(AuthContext);
  return (
    <Image
      source={{ uri: userData ? client.photo : null }}
      //source={require('../../../assets/images/avatar.png')}
      style={styleMenuTheme.avatarImage}
    />
  );
};

export default Photo;
