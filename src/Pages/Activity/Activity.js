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
    time: 0
  })
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(false)

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
  }
  const handleTimerStop = () => {
    { !status && timerRef.current.stop() }
    setStatus(true)
  }
  const handleEnd = (t) => {
    setAllData({ ...allData, time: t })
  }
  const handleTimer = (t) => {
    console.log("t", t)
    if (t % 5 == 0) {
      getPosition()
      // handleActivity()
    }
  }

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
      console.log("çalıştı")
      console.log("current user", auth().currentUser.uid)
      database()
        .ref('/Users/' + auth().currentUser.uid)
        .push()
        .set({ allData })


    } catch (err) {
      console.log("error", err)
    }
    // newReference
    //   .set({
    //     age: 32,
    //   })
    //   .then(() => console.log('Data updated.'));
    // database()
    //   .ref('/Activity')
    //   .once('value')
    //   .then(snapshot => {
    //     console.log('User data: ', snapshot.val());
    //   });
    console.log("DATABASE")
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
          time: 0
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
    // handleActivity()
  }, [])

  useEffect(() => {
    const length = allData.allCoords.length - 1
    if (currentLocation.latitude !== 0 && currentLocation.latitude !== allData.allCoords[length].latitude) {
      setAllData({
        allCoords: [...allData.allCoords, currentLocation],
        distance: allData.distance + calculateDistance(allData.allCoords[length].latitude, allData.allCoords[length].longitude, currentLocation.latitude, currentLocation.longitude),
        time: 0
      })
    }
  }, [currentLocation])
  console.log("allData", allData)
  // useEffect(() => {
  //   if (coord.latitude !== 0) {
  //     setCoords([...coords, coord])
  //   }
  // }, [coord])

  if (loading) {
    return <ActivityIndicator size="large" />
  }



  return (
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
    />
  )
}

export default Activity;

