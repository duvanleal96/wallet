import React, { useEffect } from 'react';
import { Alert, BackHandler, View } from 'react-native';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { UserLoginForm } from '../components/organisms/UserLoginForm';
import { ButtonsLoginIcons } from '../components/organisms/ButtonsLoginIcons';
import { styles } from '../theme/WalletTheme';
import { RuleLogin } from '../components/atoms/RuleLogin';
import Logo from '../components/molecules/Logo';

const LoginUserScreen = ({ navigation }: MyStackScreenProps) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.main}>
      <Logo />
      <UserLoginForm action={() => navigation.navigate('PaswordUserScreen')} />
      <RuleLogin
        text="Registrer"
        action={() => navigation.navigate('RegisterScreen')}
      />
      <ButtonsLoginIcons />
    </View>
  );
};

export default LoginUserScreen;
