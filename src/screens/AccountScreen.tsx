import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { StyleAccountTheme } from '../theme/AccountTheme';
import { DataInterface } from '../interface/DataInterface';
import { AccountBalance } from '../components/molecules/AccountBalance';
import Movements from '../components/organisms/Movements';

const timeElapsed: number = Date.now();
const today = new Date(timeElapsed);

const movements: DataInterface[] = [
  {
    id: 'n45j228347293n2b3',
    title: 'First Item',
    amount: 120000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: 'Duvan',
    outcome: '',
  },
  {
    id: '3ac68afc91aa97f63',
    title: 'Second Item',
    amount: 20000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Duvan',
  },
  {
    id: '4ac68c91a9374aq',
    title: 'chevecha',
    amount: 680000,
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Duvan',
  },
];

export const AccountScreen = ({ navigation }: any) => {
  /*const { loggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (loggedIn === false) {
      //   navigation.dispatch(StackActions.replace('Login'));
      navigation.navigate('LaunchScreen');
    }
  }, [loggedIn, navigation]);*/

  const renderTransactions = ({ item }: ListRenderItemInfo<DataInterface>) => (
    <Movements
      title={item.title}
      amount={item.amount}
      id={item.id}
      image={item.image}
      date={item.date}
      income={item.income}
    />
  );

  return (
    <View style={StyleAccountTheme.container}>
      <View style={StyleAccountTheme.circle} />
      <AccountBalance balance={123123123} />
      <FlatList
        data={movements}
        renderItem={renderTransactions}
        keyExtractor={movement => movement.id}
      />
    </View>
  );
};
