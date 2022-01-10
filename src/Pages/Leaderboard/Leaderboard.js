import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

import styles from './Leaderboard.style';
import LeaderboardCard from '../../Components/Cards/LeaderboardCard/LeaderboardCard';

const Leaderboard = () => {
  const navigation = useNavigation();
  const [leaderboardData, setLeaderboardData] = useState()

  useEffect(() => {
    navigation.addListener("focus", () => {
      handleDataPull()
    });
  }, [])

  function handleDataPull() {
    database()
      .ref('/sumUsers')
      .once('value')
      .then(snapshot => {
        const data = snapshot.toJSON();
        setLeaderboardData(handleDataFormat(data))
      })
      .catch((err) => {
        Alert.alert('WannaRun', 'An error occurred')
      })
  }

  const renderLeaderboard = ({ item }) => {
    return (
      <LeaderboardCard data={item} />
    )
  }

  function handleDataFormat(data) {
    return Object.keys(data).map(key => {
      return {
        id: key,
        ...data[key],
      }
    })
      .sort(function (a, b) {
        return (a.distance > b.distance) ? -1 : ((a.distance < b.distance) ? 1 : 0);
      });
  }
  return (
    <View>
      <Text style={styles.header}>Leaderboard</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Username</Text>
        <Text style={styles.title}>Distance</Text>
        <Text style={styles.title}>Duration</Text>
      </View>
      <FlatList
        renderItem={renderLeaderboard}
        data={leaderboardData}
      />
    </View>
  );
}
export default Leaderboard;