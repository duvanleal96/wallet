import { View } from 'react-native';
import React from 'react';
import { MyDrawerContentComponentProps } from '../../interface/MyDrawerContentComponentProps';
import { stylesLoginUser } from '../../theme/LoginUserTheme';
import { styleMenuTheme } from '../../theme/MenuOptionsTheme';
import LogoLaunch from '../atoms/LogoLaunch';
import Photo from '../atoms/photo';
import TextMenu from '../atoms/TextMenu';
import { IconsMenu } from '../molecules/IconsMenu';

export const MenuOptions = ({ navigation }: MyDrawerContentComponentProps) => {
  return (
    <View style={styleMenuTheme.main}>
      <View style={styleMenuTheme.containerPhoto}>
        <Photo size={110} />
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
          action={() => navigation.navigate('ThemesScreen')}
        />
        <IconsMenu icon="close" text="Logout" />
      </View>
    </View>
  );
};
