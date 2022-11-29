import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaymentScreen } from '../screens/PaymentScreen';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PaymentScreen" component={PaymentScreen} />
    </Tab.Navigator>
  );
}
