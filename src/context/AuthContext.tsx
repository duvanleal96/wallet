import React, { useState, useEffect } from 'react';
import Auth0 from 'react-native-auth0';
import jwtDecode from 'jwt-decode';
import SInfo from 'react-native-sensitive-info';
import { Alert } from 'react-native';
import { useDataService } from '../hooks/services/UseDataServices';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../redux/slices/AccountSlice';
import { setMovements } from '../redux/slices/MovementsSlice';
import { setToken } from '../redux/slices/AuthSlice';
import { RootState } from '../redux/storage/ConfigStore';
import { ClientInterface } from '../redux/interface/ClientInterface';
import { setClient } from '../redux/slices/ClientSlice';

const auth0 = new Auth0({
  domain: 'dev-ayi4fu7opqgqu40f.us.auth0.com',
  clientId: 'pNF6fMQYna8mXEiOBK53xttEky3hKVw5',
});

export const AuthContextProvider = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [userData, setUserData] = useState<
    | {
        name: string;
        picture: string;
      }
    | undefined
  >();
  const { getClientByEmail, getFullAccount } = useDataService();
  const { client } = useSelector((state: any) => state.client);
  const { token } = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const user_data = await getUserData();
          if (user_data) {
            if (
              client.id !== '' &&
              client.id !== null &&
              client.id !== undefined
            ) {
              const responseAccountFull = await getFullAccount(
                client.id,
                token,
              );
              if (
                responseAccountFull &&
                responseAccountFull.account.id !== null &&
                responseAccountFull.account.id !== undefined &&
                responseAccountFull.account.id !== ''
              ) {
                dispatch(setAccount(responseAccountFull.account));
                dispatch(setMovements(responseAccountFull.movements));
              }
            }
            setLoading(true);
            setLoggedIn(true);
            setUserData(user_data);
          }
        }
      } catch (err) {
        Alert.alert('Error logging in');
      }
    })();
  }, [loggedIn]);

  const getUserData = async (id?: string) => {
    // Saco el token del SInfo, algo que deberíamos cambiar por el Redux
    const idToken = id ? id : await SInfo.getItem('idToken', {});
    // Decodifico el token (JWT)
    const { name, picture, exp, email } = jwtDecode<any>(idToken);
    const data = jwtDecode<any>(idToken);
    dispatch(setToken(idToken));
    console.log('data JWT', JSON.stringify(data, null, 2));

    let getClientResponse: ClientInterface | undefined = await getClientByEmail(
      data.email,
      idToken,
    );
    if (getClientResponse) {
      dispatch(setClient(getClientResponse));
    }
    if (exp < Date.now() / 1000) {
      throw new Error('ID token expired!');
    }

    return {
      name,
      picture,
      email,
    };
  };

  useEffect(() => {
    (async () => {
      try {
        const user_data = await getUserData();
        if (user_data) {
          setLoggedIn(true);
          setUserData(user_data);
          setLoading(false);
        }
      } catch (err) {
        setLoggedIn(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const user_data = await getUserData();
          if (user_data) {
            setLoading(true);
            setLoggedIn(true);
            setUserData(user_data);
          }
        }
      } catch (err) {
        console.log('error no esta conectado' + err);
        Alert.alert('Error logging in');
      }
    })();
  }, [loggedIn]);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      // Aquí se obtiene el token JWT
      await SInfo.setItem('idToken', credentials.idToken, {});
      // Se obtiene la información del usuario
      const user_data = await getUserData(credentials.idToken);
      setLoading(false);
      setLoggedIn(true);
      setUserData(user_data);
    } catch (err) {
      console.log('error en el logueo :>> ', err);
      Alert.alert('Error in login');
    }
  };

  const logout = async () => {
    try {
      // Limpiando la sesión en Auth0
      await auth0.webAuth.clearSession({});
      // Limpiando la sesión. En nuestro caso sería en el Redux
      await SInfo.deleteItem('idToken', {});
      setLoggedIn(false);
      setUserData(undefined);
      setAccount({
        id: '',
        idClient: '',
        balance: '',
        credit: '',
        state: 0,
        createdAt: null,
        updatedAt: null,
        deletedAt: null,
        movementsIncome: [],
        movementsOutcome: [],
      });
      setClient({
        id: '',
        fullName: '',
        email: '',
        phone: '',
        photo: 'https://reactjs.org/logo-og.png',
        state: 1,
        createdAt: new Date('December 2, 2022 03:24:00'),
        updatedAt: null,
        account: {
          id: '',
          idClient: '',
          balance: '',
          credit: '',
          state: 0,
          createdAt: new Date('December 7, 1995 03:24:00'),
          updatedAt: null,
          deletedAt: null,
          movementsIncome: [],
          movementsOutcome: [],
        },
        app: {
          id: '',
          idClient: '',
          color: '',
          createdAt: new Date('December 17, 1995 03:24:00'),
          updatedAt: null,
        },
      });
    } catch (err) {
      console.log('err en cierre de sesion', err);
      Alert.alert('Error logout in' + err);
    }
  };
  const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
const AuthContext = React.createContext<any>(null);
export { AuthContext };
