import React from 'react';
import { Button, Text, View } from 'react-native';
import { MenuOptions } from '../components/organisms/MenuOptions';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';

export const MenuScreen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <MenuOptions />
    </View>
  );
};
