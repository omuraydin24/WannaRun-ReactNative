import React, { useState, useEffect, useRef } from 'react';
import { View, Button, PermissionsAndroid, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hasPermission } from "../../Hooks/useLocationPermission";
import { captureRef } from 'react-native-view-shot';
import Geolocation from '@react-native-community/geolocation';
import ActivityLayout from './ActivityLayout';
import calculateDistance from '../../Helper/CalculateDistance/CalculateDistance';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import routes from "../../Navigation/routes"

const Activity = () => {
  const navigation = useNavigation();
  const viewRef = useRef();
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
  const [screenshot, setScreenshot] = useState()

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

  const handleScreenshot = async () => {
    try {
      const ss = await captureRef(viewRef, {
        format: 'png',
        quality: 0.7,
      });
      setScreenshot(ss)
    }
    catch (err) {
      console.log(err)
    }
  }
  console.log("screenshot", screenshot)

  useEffect(() => {
    const length = allData.allCoords.length - 1
    if (currentLocation.latitude !== 0 && currentLocation.latitude !== allData.allCoords[length].latitude) {
      setAllData({
        allCoords: [...allData.allCoords, currentLocation],
        distance: allData.distance + calculateDistance(allData.allCoords[length].latitude, allData.allCoords[length].longitude, currentLocation.latitude, currentLocation.longitude),
        time: time,
        date: date,
      })
      if (time % 10 == 9) {
        setGraphData([...graphData, (calculateDistance(allData.allCoords[length].latitude, allData.allCoords[length].longitude, currentLocation.latitude, currentLocation.longitude) * 10000)])
      }
      if (graphData.length > 5) {
        let shiftedArray = graphData
        shiftedArray.shift()
        setGraphData(shiftedArray)
      }

    }
    const graphLength = graphData.length

    // if (graphData.length > 10) {
    //   graphData.shift()
    // }
    // setGraphData([...graphData, Math.round(allData.distance * 1000) - graphData[graphLength - 1]])
    console.log("graphData", graphData)
    // console.log("length -1 değer: ", graphData[graphLength - 2])
    // console.log("SON değer: ", graphData[graphLength - 1])
  }, [currentLocation])



  const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0,0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
        // console.log("Current Position", p)
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
    var utc = new Date().toDateString();
    // var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    setDate(utc)
  }
  const handleTimerPause = () => {
    {
      status && timerRef.current.pause();
      setStatus(true)
    }
  }
  const handleTimerStop = () => {
    timerRef.current.stop()
  }
  const handleEnd = (t) => {
    setAllData({ ...allData, time: t, image: screenshot })
    handleActivity()
    setHasStarted(false)
    handleNavigateSummary()
    setStatus(true)
    handleScreenshot()
    storeSum()
  }
  function storeSum() {
    // const sumData = {
    //   duration: allData.time,
    //   distance: allData.distance
    // }
    const newReference = database().ref('/users').push();
    // console.log('Auto generated key: ', newReference.key);
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
      console.log("error", err)
    }

  }

  // console.log("DATE", date)
  const handleTimer = (t) => {
    console.log("t", t)
    if (t % 5 == 0) {
      getPosition()
      // const [hours, minutes, seconds] = [Math.floor(t / 3600), Math.floor(t / 60), t % 60]
      // console.log(`${hours}:${minutes}:${seconds}`);
      console.log(handleTimeFormat(t))
      // const timeShow = handleTimeFormat()
      setTime(t)
    }
    // return (
    //   handleTimeFormat(t)
    // )
    // if (t % 5 == 0) {
    //   graphDistance()
    // }
  }

  const handleNavigateSummary = () => {
    navigation.navigate(routes.SUMMARY_PAGE, { allData })
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
      database()
        .ref('Users/' + auth().currentUser.uid)
        .push()
        .set({ allData })
    } catch (err) {
      console.log("error", err)
    }
  }

  console.log("allData", allData)
  // console.log("GRAPH", graphData)

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
        viewRef={viewRef}
      />
    </View>
  )
}

export default Activity;