import React from 'react';
import { Text, View } from 'react-native';
import { stylesLoginUser } from '../../theme/LoginUserTheme';

interface Props {
  text?: string;
}

export const RuleLogin = ({ text }: Props) => {
  return (
    <View style={stylesLoginUser.containerRule}>
      <View style={stylesLoginUser.line} />
      <View>
        <Text style={stylesLoginUser.textRule}>{text}</Text>
      </View>
      <View style={stylesLoginUser.line} />
    </View>
  );
};
