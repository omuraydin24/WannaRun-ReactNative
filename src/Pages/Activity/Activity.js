import React, { useState, useEffect, useRef } from 'react';
import { View, Button, PermissionsAndroid, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hasPermission } from "../../Hooks/useLocationPermission";
import { Timer, Countdown } from 'react-native-element-timer';
import MapView, { Circle, Polyline, Marker, AnimatedRegion } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from "react-native-maps-directions";
import ActivityLayout from './ActivityLayout';
import calculateDistance from '../../Helper/CalculateDistance/CalculateDistance';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';



const GOOGLE_API = "AIzaSyArbjnFtKZXprOc80XxdhqMQ7szz-AnBhM"

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
  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0])


  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }
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
        console.log("Current Position", p)
        handleCoordinates(p)
      },
      (e) => console.log(e),
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
  }
  const handleTimerPause = () => {
    {
      status && timerRef.current.pause();
      setStatus(true)
    }
  }
  const handleTimerStop = () => {
    {
      status && timerRef.current.stop()
      setStatus(true)
      handleActivity()
      storeSum()
      var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
      setDate(utc)
      setHasStarted(false)
    }
  }
  const handleEnd = (t) => {
    setAllData({ ...allData, time: t })
  }
  const handleTimer = (t) => {
    console.log("t", t)
    if (t % 5 == 0) {
      getPosition()
      // const [hours, minutes, seconds] = [Math.floor(t / 3600), Math.floor(t / 60), t % 60]
      // console.log(`${hours}:${minutes}:${seconds}`);
      console.log(handleTimeFormat(t))

      // handleActivity()
    }
    return (
      handleTimeFormat(t)
      // setTime(handleTimeFormat(t))
    )
    // if (t % 5 == 0) {
    //   graphDistance()
    // }
  }

  const handleTimeFormat = (t) => {
    let seconds = Math.floor((t % 60))
    let minutes = Math.floor((t / 60))
    let hours = Math.floor((t / 3600) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds
  }

  // console.log("GRAPHDATA", graphData)
  const handleCoordinates = (c) => {
    setCurrentLocation({
      latitude: c.coords.latitude,
      longitude: c.coords.longitude
    })
  }
  function handleActivity() {
    // const newReference = database().ref('/users').push();
    // console.log('Auto generated key: ', newReference.key);
    try {
      // console.log("çalıştı")
      // console.log("current user", auth().currentUser.uid)
      database()
        .ref('Users/' + auth().currentUser.uid)
        .push()
        .set({ allData })


    } catch (err) {
      console.log("error", err)
    }
    // console.log("DATABASE")
  }
  function storeSum() {
    const sumData = {
      duration: allData.time,
      distance: allData.distance
    }
    const newReference = database().ref('/users').push();
    // console.log('Auto generated key: ', newReference.key);
    try {
      database()
        .ref("sumUsers")
        .child(auth().currentUser.uid)
        .set(({
          duration: database.ServerValue.increment(allData.time),
          distance: database.ServerValue.increment(allData.distance)
        }))

    } catch (err) {
      console.log("error", err)
    }

  }

  useEffect(() => {
    const locationPermission = hasPermission();
    if (!locationPermission) {
      console.log("location permission yok")
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

          (e) => console.log(e),
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
    }
    const graphLength = graphData.length

    // if (graphData.length > 10) {
    //   graphData.shift()
    // }
    setGraphData([...graphData, Math.round(allData.distance * 1000) - graphData[graphLength - 1]])
    // console.log("Length", graphData.length)
    // console.log("length -1 değer: ", graphData[graphLength - 2])
    // console.log("SON değer: ", graphData[graphLength - 1])
  }, [currentLocation])


  // console.log("allData", allData)
  console.log("GRAPH", graphData)

  if (loading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <View style={{ flex: 1 }}>
      <ActivityLayout
        loading={loading}
        handleTimerStart={handleTimerStart}
        handleTimerStop={handleTimerStop}
        timerRef={timerRef}
        handleTimer={handleTimer}
        initialLocation={allData.allCoords[0]}
        currentLocation={currentLocation}
        allData={allData}
        handleEnd={handleEnd}
        handleActivity={handleActivity}
        handleTimerPause={handleTimerPause}
        barGraphData={barGraphData}
        chartConfig={chartConfig}
        hasStarted={hasStarted}
      />

    </View>
  )
}

export default Activity;

