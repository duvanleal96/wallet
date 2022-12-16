import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyleAccountTheme } from '../../theme/AccountTheme';
import { useSelector } from 'react-redux';
import useAccount from '../../hooks/services/UseAccount';
import { RootState } from '../../redux/storage/ConfigStore';

interface Props {
  id: string;
  title: string;
  amount: string;
  image: string;
  date: Date;
  income?: string;
  outcome?: string;
}

const Transaction = ({
  title,
  amount,
  image,
  date,
  income,
  outcome,
}: Props) => {
  const { currencyFormat, dateFormat } = useAccount();
  const { client } = useSelector((state: RootState) => state.client);

  return (
    <View style={StyleAccountTheme({}).transaction}>
      <View>
        <Image source={{ uri: image }} style={StyleAccountTheme({}).image} />
      </View>
      <View
        style={
          StyleAccountTheme({
            color: client.app.color === '' ? '#1554F7' : client.app.color,
          }).textContainer
        }>
        <Text
          style={
            StyleAccountTheme({
              color: client.app.color === '' ? '#1554F7' : client.app.color,
            }).reason
          }
          numberOfLines={1}>
          {title}
        </Text>
        <Text
          style={
            StyleAccountTheme({
              color: client.app.color === '' ? '#1554F7' : client.app.color,
            }).date
          }>
          {dateFormat(date)}
        </Text>
      </View>

      <Text
        style={{
          ...(income === ''
            ? StyleAccountTheme({
                color: client.app.color === '' ? '#1554F7' : client.app.color,
              }).outcomeAmount
            : StyleAccountTheme({
                color: client.app.color === '' ? '#1554F7' : client.app.color,
              }).incomeAmount),
        }}>
        {currencyFormat(Number(amount))}
      </Text>
    </View>
  );
};

export default Transaction;
