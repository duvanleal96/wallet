import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaymentScreen } from '../screens/PaymentScreen';
import { AccountScreen } from '../screens/AccountScreen';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon3MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LoansScreen } from '../screens/LoansScreen';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#1554f7',
          height: 45,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="My App"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: props => (
            <IconIonicons
              name={props.focused ? 'home-sharp' : 'home-outline'}
              size={props.size}
              color={props.color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
      <Tab.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          tabBarLabel: 'Loans',
          tabBarIcon: props => (
            <FontAwesome5
              name="hand-holding-heart"
              size={props.size}
              color={props.color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon3MaterialIcons name="payment" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
