import React, { useState, useEffect, useRef } from 'react';
import { View, Button, PermissionsAndroid, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Circle, Polyline, Marker, AnimatedRegion } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { hasPermission } from "../../Hooks/useLocationPermission";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_API = "AIzaSyArbjnFtKZXprOc80XxdhqMQ7szz-AnBhM"


const Activity = () => {
  const navigation = useNavigation();
  const [currentPosition, setCurrentPosition] = useState(initialState)
  const mapRef = useRef(null)

  const initialState = {
    latitude: 37.3318456,
    longitude: -122.0296002,

  }

  const destination = {
    latitude: 37.771707,
    longitude: -122.4053769,
  }

  const interval = useRef(null)

  useEffect(() => {
    if (!initialState || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    })
  }, [initialState, destination])

  console.log(destination.latitude)
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={{ flex: 1 }}
        pointerEvents="none"
      >
        <MapView
          ref={mapRef}
          style={{ flex: 1, opacity: 0.6 }}
          initialRegion={{
            latitude: initialState.latitude,
            longitude: initialState.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Circle
            center={{
              latitude: initialState.latitude,
              longitude: initialState.longitude,
            }}
            radius={10}
            fillColor="red"
          />
          {initialState && destination && (
            <MapViewDirections
              origin={initialState}
              destination={destination}
              apikey={GOOGLE_API}
              strokeWidth={3}
              strokeColor="blue"
            />
          )}

          {initialState && (
            <Marker
              coordinate={{
                latitude: initialState.latitude,
                longitude: initialState.longitude
              }}
              title="Origin"
              description="Origin Marker"
              identifier="origin"
            />)}
          {destination && (
            <Marker
              coordinate={{
                latitude: destination.latitude,
                longitude: destination.longitude
              }}
              title="Destination"
              description="Destination Marker"
              identifier="destination"
            />)}
        </MapView>
      </View>
      <Button title="Go"></Button>
    </View >
  )
}
export default Activity;
