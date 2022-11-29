import { Button, View } from 'react-native';
import React from 'react';
import { MyDrawerContentComponentProps } from '../../interface/MyDrawerContentComponentProps';

export const MenuOptions = ({ navigation }: MyDrawerContentComponentProps) => {
  return (
    <View>
      <Button title="aqui" />
    </View>
  );
};
