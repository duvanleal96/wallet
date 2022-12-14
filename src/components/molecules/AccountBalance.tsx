import { Text, View } from 'react-native';
import React from 'react';
import { StyleAccountTheme } from '../../theme/AccountTheme';
import useCurrency from '../../hooks/UseCurrency';

interface Props {
  balance?: number;
}

export const AccountBalance = ({ balance }: Props) => {
  const { currencyFormat } = useCurrency();
  return (
    <View style={StyleAccountTheme.container}>
      <Text
        style={StyleAccountTheme.balance}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {currencyFormat(balance ? balance : 0)}
      </Text>
      <Text style={StyleAccountTheme.txt}>Balance in your account</Text>
    </View>
  );
};
