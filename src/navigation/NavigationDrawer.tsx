import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { MyDrawerContentComponentProps } from '../interface/MyDrawerContentComponentProps';
import { MenuOptions } from '../components/organisms/MenuOptions';
import { AccountScreen } from '../screens/AccountScreen';
import { PaymentScreen } from '../screens/PaymentScreen';

const Drawer = createDrawerNavigator();

export function NavigationDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={(props: MyDrawerContentComponentProps) => (
        <MenuOptions {...props} />
      )}>
      <Drawer.Screen
        name="home"
        component={StackNavigation}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
          drawerItemStyle: { display: 'none' },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
      <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />
    </Drawer.Navigator>
  );
}
