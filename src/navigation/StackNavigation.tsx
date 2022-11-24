import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import LoginUserScreen from '../screens/LoginUserScreen';
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
      <Stack.Screen name="Launch" component={LaunchScreen} />
      <Stack.Screen name="LoginUserScreen" component={LoginUserScreen} />
    </Stack.Navigator>
  );
};
