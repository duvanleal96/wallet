import React, { useContext } from 'react';
import { Alert, View } from 'react-native';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { styles } from '../theme/WalletTheme';
import { RuleLogin } from '../components/atoms/RuleLogin';
import Logo from '../components/molecules/Logo';
import { UserPasswordForm } from '../components/organisms/UserPasswordForm';
import { stylesLoginUser } from '../theme/PasswordUserTheme';
import { AuthButton } from '../components/atoms/AuthButton';
import { AuthContext } from '../context/AuthContext';

const PasswordUserScreen = ({ navigation }: MyStackScreenProps) => {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.main}>
      <Logo />
      <UserPasswordForm action={() => navigation.navigate('TabNavigation')} />
      <RuleLogin text="or use" />
      <View style={stylesLoginUser.formContainer}>
        <AuthButton
          icon="google"
          text="Sign in with Google"
          action={() => login()}
        />
        <AuthButton
          icon="apple"
          text="Sign in with Apple"
          action={() => Alert.alert('no implementado')}
        />
      </View>
    </View>
  );
};

export default PasswordUserScreen;
