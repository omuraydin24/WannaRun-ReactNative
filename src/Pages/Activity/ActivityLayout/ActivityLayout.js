import React, { useState, useEffect, useRef } from 'react';
import { View, Button, PermissionsAndroid, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hasPermission } from "../../Hooks/useLocationPermission";
import { Timer, Countdown } from 'react-native-element-timer';
import MapView, { Circle, Polyline, Marker, AnimatedRegion } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from "react-native-maps-directions";

import styles from "./ActivityLayout.style";

const GOOGLE_API = "AIzaSyArbjnFtKZXprOc80XxdhqMQ7szz-AnBhM"
import { PROVIDER_GOOGLE } from 'react-native-maps';

const ActivityLayout = ({ loading, handleActivity, allData, handleTimerStart, handleTimerStop, timerRef, handleTimer, initialLocation, currentLocation, handleEnd }) => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={{ flex: 1 }}
      // pointerEvents="none"
      >
        <MapView
          // ref={mapRef}
          style={{ flex: 1, opacity: 0.6 }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={currentLocation}
          // title="Origin"
          // description="Origin Marker"
          // identifier="origin"
          />
          <Polyline
            coordinates={allData.allCoords}
            strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
            // strokeColors={[
            //   '#7F0000',
            //   '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            //   '#B24112',
            //   '#E5845C',
            //   '#238C23',
            //   '#7F0000'
            // ]}
            strokeWidth={6}
          />

          {/* <Marker
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude
            }}
            title="Destination"
            description="Destination Marker"
            identifier="destination"
          /> */}


          {/* <Circle
            center={{
              latitude: coord.latitude,
              longitude: coord.longitude,
            }}
            radius={3}
            fillColor="red"
          /> */}
        </MapView>
      </View>
      <View><Text>Distance: {Math.floor(allData.distance * 1000)} Meters</Text></View>
      <Timer
        ref={timerRef}
        style={styles.timer}
        textStyle={styles.timerText}
        onTimes={e => handleTimer(e)}
        onPause={e => { }}
        onEnd={e => handleEnd(e)}
      />
      <Button
        style={styles.button}
        title={'Start'}
        onPress={handleTimerStart}
      />
      <Button
        style={styles.button}
        title={'Database'}
        onPress={handleActivity}
      />
      <Button
        style={styles.button}
        title={'Pause'}
        onPress={() => {
          timerRef.current.pause();
        }}
      />
      <Button
        style={styles.button}
        title={'Stop'}
        onPress={handleTimerStop}
      />
    </View >
  );
}

export default ActivityLayout;

