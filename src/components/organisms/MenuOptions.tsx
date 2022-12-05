import { View } from 'react-native';
import React, { useContext } from 'react';
import { MyDrawerContentComponentProps } from '../../interface/MyDrawerContentComponentProps';
import { stylesLoginUser } from '../../theme/LoginUserTheme';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';
import LogoLaunch from '../atoms/LogoLaunch';
import Photo from '../atoms/photo';
import { IconsMenu } from '../molecules/IconsMenu';
import { AuthContext } from '../../context/AuthContext';
import { TextMenu } from '../atoms/TextMenu';

export const MenuOptions = ({ navigation }: MyDrawerContentComponentProps) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styleMenuTheme.main}>
      <View>
        <TextMenu />
      </View>
      <View style={styleMenuTheme.containerRule}>
        <View style={stylesLoginUser.line} />
      </View>
      <View style={styleMenuTheme.container}>
        <LogoLaunch size={150} />
      </View>
      <View style={styleMenuTheme.icons}>
        <IconsMenu
          text="Change password"
          icon="settings"
          action={() => navigation.navigate('ChangePasswordScreen')}
        />
        <IconsMenu
          text="Change App Theme"
          icon="bookmark"
          action={() => navigation.navigate('ChangeThemeScreen')}
        />
        <IconsMenu icon="close" text="Logout" action={logout()} />
      </View>
    </View>
  );
};
