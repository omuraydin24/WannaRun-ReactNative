import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hasPermission } from "../../Hooks/useLocationPermission";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Geolocation from '@react-native-community/geolocation';
import ActivityLayout from './ActivityLayout';
import calculateDistance from '../../Helper/CalculateDistance/CalculateDistance';
import routes from "../../Navigation/routes"
import styles from "./Activity.style";

const Activity = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0, longitude: 0
  })
  const [allData, setAllData] = useState({
    allCoords: [],
    distance: 0,
    time: 0,
    date: '',
  })
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [time, setTime] = useState(0)
  const [date, setDate] = useState()
  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0])

  useEffect(() => {
    const locationPermission = hasPermission();
    if (!locationPermission) {
      Alert.alert("WannaRun", "Check the Location Permission Settings")
      return;
    }
    Geolocation.getCurrentPosition(
      (c) => {
        setAllData({
          allCoords: [{
            latitude: c.coords.latitude,
            longitude: c.coords.longitude
          }],
          distance: 0,
          time: 0,
          date: ''
        })
        setCurrentLocation({
          latitude: c.coords.latitude,
          longitude: c.coords.longitude
        })
        setLoading(false),
          (e) => Alert.alert('WannaRun', 'An error occurred'),
        {
          accuracy: {
            android: "high",
          },
          enableHighAccuracy: true,
        }
        setLoading(false)
      }
    )
  }, [])

  useEffect(() => {
    const length = allData.allCoords.length - 1
    if (currentLocation.latitude !== 0 && currentLocation.latitude !== allData.allCoords[length].latitude) {
      setAllData({
        allCoords: [...allData.allCoords, currentLocation],
        distance: allData.distance + calculateDistance(allData.allCoords[length].latitude, allData.allCoords[length].longitude, currentLocation.latitude, currentLocation.longitude),
        time: time,
        date: date,
      })
      if (time % 60 == 0) {
        setGraphData([...graphData, (calculateDistance(allData.allCoords[length].latitude, allData.allCoords[length].longitude, currentLocation.latitude, currentLocation.longitude) * 10000)])
      }
      if (graphData.length > 6) {
        let shiftedArray = graphData
        shiftedArray.shift()
        setGraphData(shiftedArray)
      }
    }
  }, [currentLocation])

  const barGraphData = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        data: graphData
      }
    ]
  }

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      (p) => {
        handleCoordinates(p)
      },
      (e) => Alert.alert('WannaRun', 'An error occurred'),
      {
        accuracy: {
          android: "high",
        },
        enableHighAccuracy: true,
      }
    )
  }

  const handleTimerStart = () => {
    {
      !status && timerRef.current.start()
    }
    setStatus(true)
    setHasStarted(true)
    var utc = new Date().toDateString();
    setDate(utc)
  }

  const handleTimerStop = () => {
    timerRef.current.stop()
  }

  const handleTimerEnd = (t) => {
    setAllData({ ...allData, time: t })
    handleActivity()
    setHasStarted(false)
    handleNavigateSummary()
    setStatus(true)
    storeSum()
  }

  const storeSum = () => {
    try {
      database()
        .ref("sumUsers")
        .child(auth().currentUser.uid)
        .set(({
          duration: database.ServerValue.increment(allData.time),
          distance: database.ServerValue.increment(allData.distance),
          activityNumber: database.ServerValue.increment(1),
          username: auth().currentUser.email.split('@').shift()
        }))
    } catch (err) {
      Alert.alert('WannaRun', 'An error occurred')

    }
  }

  const handleTimer = (t) => {
    if (t % 5 == 0) {
      getPosition()
      setTime(t)
    }
  }

  const handleNavigateSummary = () => {
    navigation.navigate(routes.SUMMARY_PAGE, { allData })
  }

  const handleCoordinates = (c) => {
    setCurrentLocation({
      latitude: c.coords.latitude,
      longitude: c.coords.longitude
    })
  }

  const handleActivity = () => {
    try {
      database()
        .ref('Users/' + auth().currentUser.uid)
        .push()
        .set({ allData })
    } catch (err) {
      Alert.alert('WannaRun', 'An error occurred')
    }
  }

  if (loading) {
    return <ActivityIndicator size="large" />
  }
  return (
    <View style={styles.container}>
      <ActivityLayout
        barGraphData={barGraphData}
        hasStarted={hasStarted}
        allData={allData}
        onTimerStart={handleTimerStart}
        onTimerStop={handleTimerStop}
        timerRef={timerRef}
        onTimer={handleTimer}
        currentLocation={currentLocation}
        onTimerEnd={handleTimerEnd}
      />
    </View>
  )
}
export default Activity;