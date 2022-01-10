import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import DashboardLayout from './DashboardLayout';

const Dashboard = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState()

  const handleSignOut = () => auth().signOut();

  useEffect(() => {
    navigation.addListener("focus", () => {
      handleDataPull()
    });
  }, [])

  function handleDataPull() {
    database()
      .ref('/sumUsers/' + auth().currentUser.uid)
      .once('value')
      .then(snapshot => {
        setUserData(snapshot.toJSON());
      })
      .catch((err) => {
        Alert.alert('WannaRun', 'An error occurred')
      })
  }

  return (
    <DashboardLayout onSignOut={handleSignOut} userData={userData} />
  );
}

export default Dashboard;
