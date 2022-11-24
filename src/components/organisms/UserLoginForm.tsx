import { Text, View } from 'react-native';
import React from 'react';
import { stylesLoginUser } from '../../theme/LoginUserTheme';
import LoginInput from '../atoms/LoginInput';
import LoginButon from '../atoms/LoginButon';

interface Props {
  action?: () => void;
}
export const UserLoginForm = ({ action }: Props) => {
  const [text, onChangeText] = React.useState('Email or Username');

  const writeAndNavigate = (txt: string) => {
    onChangeText(txt);
    if (action) {
      action();
    }
  };
  return (
    <View style={stylesLoginUser.formContainer}>
      <Text style={stylesLoginUser.text}>Login or sign up for free.</Text>
      <LoginInput placeholder={text} action={onChangeText} />
      <LoginButon text="CONTINUE" action={action} />
    </View>
  );
};
