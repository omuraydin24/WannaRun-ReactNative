import React, { useState, useEffect } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import SwitchSelector from 'react-native-switch-selector';

import styles from './Leaderboard.style';
import LeaderboardCard from '../../Components/Cards/LeaderboardCard/LeaderboardCard';


const Leaderboard = () => {
  const navigation = useNavigation();
  const [leaderboardData, setLeaderboardData] = useState()

  const options = [
    { label: "Distance", value: "distance" },
    { label: "Duration", value: "duration" },
    { label: "Pace", value: "pace" }
  ];

  useEffect(() => {
    navigation.addListener("focus", event => {
      handleDataPull()
    });
  }, [])

  function handleDataPull() {
    // try {
    //   database()
    //     .ref('/sumUsers')
    //     .once('value', (snapshot) => {
    //       console.log(snapshot.toJSON())
    //     })
    // } catch (error) {
    //   console.log(error)
    // }
    // .then(snapshot => {
    //   console.log('User data: ', snapshot.forEach());
    //   // const data = snapshot.val();
    //   // setLeaderboardData(data)
    // })
  }
  // function handleDataPull() {
  //   database()
  //     .ref('Users')
  //     .once('value', (snapshot) => {
  //       snapshot.forEach((childSnapshot) => {
  //         console.log(childSnapshot)
  //       })
  //     })
  //   // .then(snapshot => {
  //   //   console.log('User data: ', snapshot.forEach());
  //   //   // const data = snapshot.val();
  //   //   // setLeaderboardData(data)
  //   // })
  // }
  function handleDataPull() {
    database()
      .ref('/sumUsers')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.toJSON());
        const data = snapshot.toJSON();
        setLeaderboardData(handleDataFormat(data))
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const renderLeaderboard = ({ item }) => {
    console.log("item", item.distance)
    return (
      <LeaderboardCard data={item} />
    )
  }

  function handleDataFormat(data) {
    return Object.keys(data).map(key => {
      console.log("data", data)
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