import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import DashboardLayout from './DashboardLayout';
import auth from '@react-native-firebase/auth';


const Dashboard = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState()

  const handleSignOut = () => auth().signOut();

  useEffect(() => {
    navigation.addListener("focus", event => {
      handleDataPull()
    });
  }, [])

  function handleDataPull() {
    database()
      .ref('/sumUsers/' + auth().currentUser.uid)
      .once('value')
      .then(snapshot => {
        // console.log('User data: ', snapshot.val());
        setUserData(snapshot.toJSON());
        // setLeaderboardData(handleDataFormat(data))
        // console.log("toplamData", data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // function handleDataFormat(data) {
  //   return Object.keys(data).map(key => {
  //     console.log("key", key)
  //     return {
  //       id: key,
  //       ...data[key],

  //     }
  //   })
  // }

  return (
    <DashboardLayout onSignOut={handleSignOut} userData={userData} />
  );
}

export default Dashboard;
