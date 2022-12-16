import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  View,
} from 'react-native';
import { StyleAccountTheme } from '../theme/AccountTheme';
import { AccountBalance } from '../components/molecules/AccountBalance';
import { AuthContext } from '../context/AuthContext';
import { MyStackScreenProps } from '../interface/MyStackScreenProps';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/storage/ConfigStore';
import { useDataService } from '../hooks/services/UseDataServices';
import { setMovements } from '../redux/slices/MovementsSlice';
import { AccountFullInterface } from '../hooks/interface/AccountFullInterface';
import { MovementInterface } from '../redux/interface/MovementInterface';
import { setAccount } from '../redux/slices/AccountSlice';
import { setImage } from '../redux/slices/ImageSlice';
import Transaction from '../components/molecules/Transaction';
import useAccount from '../hooks/services/UseAccount';

export const AccountScreen = ({ navigation }: MyStackScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { client } = useSelector((state: RootState) => state.client);
  const { account } = useSelector((state: RootState) => state.account);
  const { images } = useSelector((state: RootState) => state.image);
  const { token } = useSelector((state: RootState) => state.token);
  const { getFullAccount } = useDataService();
  const { loggedIn } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  let image = 'https://reactjs.org/logo-og.png';

  useEffect(() => {
    if (loggedIn === false) {
      navigation.navigate('Launch');
    }
  }, [loggedIn, navigation]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (client.id !== '') {
      getFullAccount(client.id, token).then(
        (accountFull: AccountFullInterface | undefined) => {
          if (
            accountFull &&
            accountFull.account.id !== null &&
            accountFull.account.id !== undefined &&
            accountFull.account.id !== ''
          ) {
            dispatch(setAccount(accountFull.account));
            dispatch(setImage(accountFull.images));
            dispatch(setMovements(accountFull.movements));
          }
        },
      );
    }
    setRefreshing(false);
  }, []);

  const renderTransactions = ({
    item,
  }: ListRenderItemInfo<MovementInterface>) => {
    var income: string = '';
    if (
      item.idIncome !== item.idOutcome &&
      account.id === item.idOutcome &&
      images
    ) {
      income = '';
      for (const element of images) {
        if (element.id === item.idIncome) {
          image = element.photo;
        }
      }
    } else if (item.idIncome === item.idOutcome) {
      income = item.idIncome;
      // image = 'https://reactjs.org/logo-og.png';
      image = 'https://i.postimg.cc/ryPFBkm1/Logo-Wallet.jpg';
    } else {
      income = item.idIncome;
      for (const element of images) {
        if (element.id === item.idOutcome && images) {
          image = element.photo;
        }
      }
    }
    return (
      <Transaction
        title={item.reason}
        amount={item.amount}
        id={item.id}
        image={image}
        date={item.date}
        income={income}
      />
    );
  };
  const { currencyFormat } = useAccount();
  const { movements, loading } = useSelector(
    (state: RootState) => state.movements,
  );
  const movementsFix = movements.map((movement): MovementInterface => {
    const newMovement: MovementInterface = {
      id: movement.id,
      idIncome: movement.idIncome,
      idOutcome: movement.idOutcome,
      reason: movement.reason,
      amount: movement.amount,
      fees: movement.fees,
      date: new Date(movement.date),
    };
    return newMovement;
  });

  const sortedMovements = movementsFix.sort(
    (objA, objB) => objB.date.getTime() - objA.date.getTime(),
  );
  if (loading && account.id === '' && client) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View style={StyleAccountTheme({}).container}>
      <View style={StyleAccountTheme({}).circle} />
      <AccountBalance balance={account.balance} />
      <FlatList
        data={sortedMovements}
        renderItem={renderTransactions}
        keyExtractor={movement => movement.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};
