import React, { useContext, useEffect } from 'react';
import { Alert, BackHandler, View } from 'react-native';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { UserLoginForm } from '../components/organisms/UserLoginForm';
import { styles } from '../theme/WalletTheme';
import { RuleLogin } from '../components/atoms/RuleLogin';
import Logo from '../components/molecules/Logo';
import { AuthContext } from '../context/AuthContext';
import LoginButon from '../components/atoms/LoginButon';
import { stylesLoginUser } from '../theme/LoginUserTheme';
import { AuthButton } from '../components/atoms/AuthButton';

const LoginUserScreen = ({ navigation }: MyStackScreenProps) => {
  const { loggedIn, loading } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate('LoadingScreen');
    } else {
      Alert.alert('oh ha ocurrido un error en el loggeo');
    }
  }, [loggedIn, navigation]);
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

  const { login, logout } = useContext(AuthContext);

  return (
    <View style={styles.main}>
      <Logo />
      <UserLoginForm action={() => navigation.navigate('PaswordUserScreen')} />
      <LoginButon text="logout()" action={() => logout()} />
      <RuleLogin
        text="Registrer"
        action={() => navigation.navigate('RegisterScreen')}
      />
      <View style={stylesLoginUser.formContainer}>
        <AuthButton
          icon="google"
          text="Sign in with Google"
          action={() => {
            login();
            navigation.navigate('LoadingScreen');
          }}
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

export default LoginUserScreen;
