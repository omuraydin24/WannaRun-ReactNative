import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import routes from '../../Navigation/routes';
import styles from './History.style';
import HistoryCard from '../../Components/Cards/HistoryCard';

const History = () => {
  const navigation = useNavigation();
  const [historyData, setHistoryData] = useState({})

  useEffect(() => {
    navigation.addListener("focus", () => {
      handleDataPull()
    });
  }, [])

  function arrayle(data) {
    return Object.keys(data).map(key => {
      return {
        id: key,
        ...data[key],
      }
    })
      .sort(function (a, b) {
        return (a.allData.date > b.allData.date) ? -1 : ((a.allData.date < b.allData.date) ? 1 : 0);
      });
  }

  const handleDetailNavigate = (item) => {
    navigation.navigate(routes.HISTORY_DETAIL_PAGE, item)
  }

  const handleDataPull = () => {
    database()
      .ref('/Users/' + auth().currentUser.uid)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        setHistoryData(arrayle(data))
      })
  }

  const renderHistory = ({ item }) => {
    return (
      <HistoryCard item={item} onPress={() => handleDetailNavigate(item)} />
    )
  }
  return (
    <View>
      <Text style={styles.title}>Activity History</Text>
      <FlatList
        data={historyData}
        renderItem={renderHistory}
      />
    </View>
  );
}
export default History;