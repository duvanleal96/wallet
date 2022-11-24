import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { StackNavigation } from './StackNavigation';

function Feed({ navigation }: MyStackScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Notifications({navigation}: MyStackScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="home">
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen
        name="home"
        component={StackNavigation}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}