import { StackActions } from '@react-navigation/native';
import React, { useEffect, useContext } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { AuthContext } from '../context/AuthContext';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';

function LoadingScreen({ navigation }: MyStackScreenProps) {
  const { loading, loggedIn, logout } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate('TabNavigation');
    } else if (loggedIn === false) {
      navigation.dispatch(StackActions.replace('LoginUserScreen'));
    }
  }, [loggedIn, navigation]);

  return (
    <View style={styles.container}>
      {loading && (
        <React.Fragment>
          <ActivityIndicator size="large" />
          <View style={{ marginTop: 10 }}>
            <Text>Please wait...</Text>
            <TouchableOpacity onPress={() => logout()}>
              <Text>logout</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
