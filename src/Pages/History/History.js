import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from '../../Navigation/routes';

import styles from './History.style';
const History = ({ route }) => {
  const navigation = useNavigation();

  const [historyData, setHistoryData] = useState({})


  useEffect(() => {
    navigation.addListener("focus", event => {
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
        console.log('User data: ', snapshot.val());
        const data = snapshot.val();
        setHistoryData(arrayle(data))
      })
  }
  // console.log("Array Data", historyData);

  // const distancesArray = historyData.map(a => a.allData.distance)
  // console.log("DistanceData", distancesArray); // 6

  // const DistanceSum = distanceData.reduce((partial_sum, a) => partial_sum + a, 0);

  // console.log("SUM", DistanceSum)


  const renderHistory = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleDetailNavigate(item)}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.distanceNumber}>{item.allData.distance.toFixed(2)}</Text>
            <Text style={styles.distanceText}>DISTANCE (km)</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.date}>{item.allData.date}</Text>
          </View>
          <Icon name="arrow-right" size={35} color="white" />
        </View>
      </TouchableOpacity>
    )

  }

  return (
    <>
      {/* <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left-circle" size={35} color="#816cf9" />
      </TouchableOpacity> */}
      <View>
        <Text style={styles.title}>Activity History</Text>
        <FlatList
          data={historyData}
          renderItem={renderHistory}
        />
      </View>
    </>
  );
}

export default History;

const a = [{
  "allData": {
    "allCoords": [Array],
    "distance": 1.7286758954703403,
    "time": 5
  },
  "id": "-MsbUNQzY4T4eGy5LGk6"
}, {
  "allData": {
    "allCoords": [Array],
    "distance": 0.07585898914445503,
    "time": 20
  },
  "id": "-MsfDyZXL4355RoqJdsT"
}]

