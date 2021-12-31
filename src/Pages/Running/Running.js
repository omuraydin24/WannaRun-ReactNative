import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hasPermission } from "../../Hooks/useLocationPermission";
import DashboardLayout from './DashboardLayout';
import Geolocation from "@react-native-community/geolocation";
const Dashboard = () => {
  const navigation = useNavigation()
  const watchId = useRef(null)

  useEffect(() => {
    navigation.addListener("blur", event => {
      removeLocationUpdates()
    })

  }, [navigation])

  useEffect(() => {
    navigation.addListener("focus", event => {
      getLocationUpdates()
    })

  }, [navigation])

  // get latest location updates every 30 sec
  const getLocationUpdates = async () => {

    const LocationPermission = await hasPermission();


    if (!LocationPermission) {
      return;
    }

    // if (Platform.OS === 'android' && foregroundService) {
    //   await startForegroundService();
    // }

    // setObserving(true);

    watchId.current = Geolocation.watchPosition(
      (position) => {
        // setLocation(position);
        console.log(position);
      },
      (error) => {
        // setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 30000,
        fastestInterval: 2000,
        forceRequestLocation: true,
        forceLocationManager: true,
      },
    );
  };

  //function to remove location updates
  const removeLocationUpdates = () => {
    if (watchId.current !== null) {
      Geolocation.clearWatch(watchId.current)
      watchId.current = null
    }
  }

  return (
    <DashboardLayout />
  );
}

export default Dashboard;
