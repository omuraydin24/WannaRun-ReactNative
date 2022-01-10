import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Timer } from 'react-native-element-timer';
import { BarChart } from "react-native-chart-kit";
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import chartConfig from '../../../Components/utils/chartConfig';
import WeatherCard from '../../../Components/Cards/WeatherCard';

import styles from "./ActivityLayout.style";

const ActivityLayout = ({ hasStarted, barGraphData, allData, onTimerStart, onTimerStop, timerRef, onTimer, currentLocation, onTimerEnd }) => {
  const navigation = useNavigation();
  const pace = (((allData.distance) / (allData.time / 3600)).toFixed(2))

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.pop(2)}>
        <Icon name="arrow-left-circle" size={35} color="white" />
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <View style={styles.infoContainer}>
          <Timer
            ref={timerRef}
            style={styles.timer}
            textStyle={styles.timerText}
            onTimes={e => onTimer(e)}
            onEnd={e => onTimerEnd(e)}
          />
          <View style={styles.innerContainer}>
            <View style={styles.valueContainer}>
              <Text style={styles.distance}>{(allData.distance.toFixed(2))}</Text>
              <Text style={styles.distanceText}>Distance (km)</Text>
            </View>
            <View style={styles.valueContainer}>
              <Text style={styles.distance}>{pace == NaN ? 0 : pace}</Text>
              <Text style={styles.distanceText}>Avg. pace (km/h)</Text>
            </View>
          </View>
          <WeatherCard currentLocation={currentLocation} />
        </View>
        <View style={styles.mapContainer} pointerEvents="none">
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Circle
              center={currentLocation}
              radius={10}
              fillColor="#816cf9"
            />
            <Polyline
              coordinates={allData.allCoords}
              strokeColor="#816cf9"
              strokeWidth={6}
            />
          </MapView>
        </View>
        <View style={styles.statusButtonContainer}>
          <TouchableOpacity style={styles.statusButton} onPress={hasStarted ? onTimerStop : onTimerStart}>
            {
              hasStarted ?
                <Icon name="stop" size={60} color="white" />
                :
                <Icon name="play" size={60} color="white" />
            }
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.graphTitle}>Graph of the activity (Distance/Minute)</Text>
          <BarChart
            style={styles.barChart}
            data={barGraphData}
            width={365}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={0}
          />
        </View>
      </ScrollView>
    </View >
  );
}
export default ActivityLayout;