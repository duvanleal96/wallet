import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { MyDrawerContentComponentProps } from '../interface/MyDrawerContentComponentProps';
import { MenuOptions } from '../components/organisms/MenuOptions';
import { TabNavigation } from './TabNavigation';
import { RegistrerScreen } from '../screens/RegistrerScreen';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';

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
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
          drawerItemStyle: { display: 'none' },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
      <Drawer.Screen
        name="RegisterScreen"
        component={RegistrerScreen}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
          drawerItemStyle: { display: 'none' },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
      <Drawer.Screen
        name="ChangeThemeScreen"
        component={ChangeThemeScreen}
        options={{
          headerTintColor: 'white',
          title: 'MyApp',
          drawerItemStyle: { display: 'none' },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
