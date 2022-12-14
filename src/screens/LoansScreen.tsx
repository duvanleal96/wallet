import { View } from 'react-native';
import React from 'react';
import { Amount } from '../components/molecules/Amount';
import { FormInput } from '../components/molecules/FormInput';
import { MainButton } from '../components/atoms/MainButton';
import { StyleLoansTheme } from '../theme/LoansTheme';

export const LoansScreen = () => {
  return (
    <View>
      <View style={StyleLoansTheme.container}>
        <Amount number={50000000} />
        <FormInput
          icon="credit-card"
          placeholder="Amount"
          errorMsg="Amount not Avaiable"
        />
        <FormInput icon="message" placeholder={'Reason'} />
        <MainButton text="Apply for loan" width={90} />
      </View>
    </View>
  );
};
