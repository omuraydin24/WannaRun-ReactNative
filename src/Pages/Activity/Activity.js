import React, { useState, useEffect, useRef } from 'react';
import { View, Button, PermissionsAndroid, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Circle, Polyline, Marker, AnimatedRegion } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { hasPermission } from "../../Hooks/useLocationPermission";

const Activity = () => {
  const navigation = useNavigation();
  const [position, setPosition] = useState(null)

  const interval = useRef(null)

  useEffect(() => {
    navigation.addListener("focus", event => {
      interval.current = setInterval(() => getCurrentLocation(), 30000);
      getCurrentLocation();
    });
    return () => clearInterval(interval.current)
  }, [navigation])

  useEffect(() => {
    navigation.addListener("blur", event => {
      clearInterval(interval.current);
      interval.current = null;
    });
    return () => clearInterval(interval.current)
  }, [navigation])


  const getCurrentLocation = async () => {
    const locationPermission = await hasPermission();
    if (!locationPermission)
      return;
    Geolocation.getCurrentPosition(
      pos => {
        const initialPosition = pos
        setPosition(initialPosition)
        console.log("POSİTİON", pos)
      }, error => {
        setPosition(null)
        console.log("ERROR", error)
      }, {
      accuracy: {
        android: "high",
      },
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 10000,
      distanceFilter: 0,
      forceRequestLocation: true,
      forceLocationManager: false,
      showLocationDialog: true,
    }

    )
  }

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={{ flex: 1 }}
        pointerEvents="none"
      >
        <MapView
          style={{ flex: 1, opacity: 0.6 }}
          minZoomLevel={18}
          region={{
            latitude: position?.coords?.latitude || 37.78825,
            longitude: position?.coords?.longitude || -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Polyline />
          <Circle
            center={{
              latitude: position?.coords?.latitude || 37.78825,
              longitude: position?.coords?.longitude || -122.4324
            }}
            radius={4}
            fillColor="red"
          />
        </MapView>
      </View>
      <Button title="Go"></Button>
    </View >
  );
}


export default Activity;
