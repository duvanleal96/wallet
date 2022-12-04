import React from 'react';
import { View } from 'react-native';
import { MainButton } from '../components/atoms/MainButton';
import { FormInput } from '../components/molecules/FormInput';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { StyleRegistrerTheme } from '../theme/RegistrerTheme';

export const RegistrerScreen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View style={StyleRegistrerTheme.container}>
      <FormInput icon="photo" placeholder="Photo" />
      <FormInput icon="message" placeholder="Name and lastname" />
      <FormInput icon="email" placeholder="Email" />
      <FormInput icon="phone" placeholder="Phone" />
      <FormInput icon="lock" placeholder="Password" />
      <FormInput icon="lock" placeholder="Confirm password" />
      <MainButton text={'Registrer'} />
    </View>
  );
};
