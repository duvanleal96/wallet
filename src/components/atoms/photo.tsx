import React, { useContext } from 'react';
import { Image } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';

const Photo = () => {
  const { userData } = useContext(AuthContext);
  return (
    <Image
      source={{ uri: userData?.picture }}
      //source={require('../../../assets/images/avatar.png')}
      style={styleMenuTheme.avatarImage}
    />
  );
};

export default Photo;
