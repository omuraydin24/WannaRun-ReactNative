import React, { useState } from 'react';
import { View, Button, FlatList, Text, Image } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './History.style';
const History = () => {
  const [historyData, setHistoryData] = useState({})

  function arrayle(data) {
    return Object.keys(data).map(key => {
      return {
        id: key,
        ...data[key],
      }
    })
      .sort(function (a, b) {
        return (a.allData.distance > b.allData.distance) ? -1 : ((a.allData.distance < b.allData.distance) ? 1 : 0);
      });

  }

  const handleDataPull = () => {
    database()
      .ref('/Users/' + auth().currentUser.uid)
      // .orderByChild('distance')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        const data = snapshot.val();
        setHistoryData(arrayle(data))
      })
  }
  console.log("Array Data", historyData);

  const renderHistory = ({ item }) => {
    console.log(item)
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: "https://picsum.photos/seed/picsum/300/200" }} />
        <View style={styles.infoContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.durationNumber}>{Math.round(item.allData.time)}</Text>
            <Text style={styles.durationText}>DURATION</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.distanceNumber}>{Math.round(item.allData.distance * 1000)}</Text>
              <Text style={styles.distanceText}>DISTANCE (m)</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.paceNumber}>{Math.round(item.allData.time)}</Text>
              <Text style={styles.paceText}>AVG PACE</Text>
            </View>
          </View>
        </View>
      </View>
    )

  }

  return (
    <View>
      <Button title="datagel" onPress={handleDataPull} />
      <FlatList
        data={historyData}
        renderItem={renderHistory}
      />
    </View>
  );
}

export default History;
