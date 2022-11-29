import React from 'react';
import { View } from 'react-native';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { UserLoginForm } from '../components/organisms/UserLoginForm';
import { ButtonsLoginIcons } from '../components/organisms/ButtonsLoginIcons';
import { styles } from '../theme/WalletTheme';
import { RuleLogin } from '../components/atoms/RuleLogin';
import Logo from '../components/molecules/Logo';

const PasswordUserScreen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View style={styles.main}>
      <Logo />
      <UserLoginForm
        action={() => navigation.navigate('LoginPasswordScreen')}
      />
      <RuleLogin text="or use" />
      <ButtonsLoginIcons />
    </View>
  );
};

export default PasswordUserScreen;
