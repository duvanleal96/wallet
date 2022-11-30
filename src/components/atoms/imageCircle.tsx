import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface Props {
  size?: number;
  src?: NodeRequire;
}

export const CircleImage = ({ size, src }: Props) => {
  const styles = StyleSheet.create({
    img: {
      height: size ? size : 26,
      width: size ? size : 26,
    },
    imgContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      width: 50,
      height: 50,
      backgroundColor: '#F5F5F6',
    },
  });
  return (
    <View style={styles.imgContainer}>
      <Image
        style={styles.img}
        source={src ? src : require('../../assets/images/logo.png')}
      />
    </View>
  );
};
