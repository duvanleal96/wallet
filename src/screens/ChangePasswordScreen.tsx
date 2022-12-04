import { View } from 'react-native';
import React from 'react';
import { MainButton } from '../components/atoms/MainButton';
import { FormInput } from '../components/molecules/FormInput';
import { styles } from '../theme/LaunchTheme';

export const ChangePasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.basicIputsContainer}>
        <FormInput icon="person" placeholder="Current password" />
        <FormInput icon="mail" placeholder="New password" />
        <FormInput icon="location-on" placeholder="Retype new password" />
      </View>
      <View style={styles.verticalBtnContainer}>
        <MainButton text="Change password" width={92} />
        <MainButton
          backgroundColor="white"
          color="black"
          text="Cancel"
          width={92}
        />
      </View>
    </View>
  );
};