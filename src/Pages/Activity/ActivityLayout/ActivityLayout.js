import React, { useState, useEffect, useRef } from 'react';
import { View, Button, ScrollView, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { hasPermission } from "../../Hooks/useLocationPermission";
import { Timer, Countdown } from 'react-native-element-timer';
import { BarChart } from "react-native-chart-kit";
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView, { Circle, Polyline, Marker, AnimatedRegion } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import WeatherCard from '../../../Components/Cards/WeatherCard';
import MapViewDirections from "react-native-maps-directions";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./ActivityLayout.style";

const GOOGLE_API = "AIzaSyArbjnFtKZXprOc80XxdhqMQ7szz-AnBhM"

const ActivityLayout = ({ hasStarted, chartConfig, barGraphData, handleTimerPause, handleFucktivity, allData, handleTimerStart, handleTimerStop, timerRef, handleTimer, initialLocation, currentLocation, handleEnd }) => {
  console.log("time", allData.time)
  console.log("alldata", allData)
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.infoContainer}>
          <Timer
            ref={timerRef}
            style={styles.timer}
            textStyle={styles.timerText}
            onTimes={e => handleTimer(e)}
            onPause={e => { }}
            onEnd={e => handleEnd(e)}
          />

          <View style={styles.innerContainer}>
            <View style={styles.valueContainer}>
              <Text style={styles.distance}>{(allData.distance.toFixed(2))}</Text>
              <Text style={styles.distanceText}>Distance (km)</Text>
            </View>
            <View style={styles.valueContainer}>
              <Text style={styles.distance}>{((allData.distance) / (allData.time / 3600)).toFixed(2)}</Text>
              <Text style={styles.distanceText}>Avg. pace (km/h)</Text>
            </View>
          </View>

          <WeatherCard currentLocation={currentLocation} />
        </View>
        <View style={styles.mapContainer} pointerEvents="none">
          <MapView
            // ref={mapRef}
            style={styles.map}
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
              identifier="current"
            />
            <Polyline
              coordinates={allData.allCoords}
              strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
              strokeWidth={6}
            />


          </MapView>
        </View>

        <View style={styles.statusButtonContainer}>
          <TouchableOpacity style={styles.statusButton} onPress={hasStarted ? handleTimerStop : handleTimerStart}>
            {
              hasStarted ?
                <Icon name="stop" size={60} color="white" />
                :
                <Icon name="play" size={60} color="white" />
            }
          </TouchableOpacity>
        </View>
        <View>
          <BarChart
            style={styles.barChart}
            data={barGraphData}
            width={400}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </View>
      </ScrollView>
    </View >
  );
}

export default ActivityLayout;

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