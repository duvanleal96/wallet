import React from 'react';
import { Button, Text, View } from 'react-native';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';

export const MenuScreen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <Text> Este es el menu</Text>
      <Button
        title="No presione aqui"
        onPress={() => navigation.navigate('LaunchScreen')}
      />
    </View>
  );
};
