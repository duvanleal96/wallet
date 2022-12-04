import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { MyDrawerContentComponentProps } from '../interface/MyDrawerContentComponentProps';
import { MenuOptions } from '../components/organisms/MenuOptions';
import { TabNavigation } from './TabNavigation';
import { RegistrerScreen } from '../screens/RegistrerScreen';

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
    </Drawer.Navigator>
  );
}
