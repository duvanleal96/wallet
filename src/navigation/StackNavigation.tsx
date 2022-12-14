import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import LoginUserScreen from '../screens/LoginUserScreen';
import PasswordUserScreen from '../screens/PaswordUserScreen';
import LoadingScreen from '../screens/LoadingScreen';
const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
      <Stack.Screen name="LoginUserScreen" component={LoginUserScreen} />
      <Stack.Screen name="PaswordUserScreen" component={PasswordUserScreen} />
    </Stack.Navigator>
  );
};
