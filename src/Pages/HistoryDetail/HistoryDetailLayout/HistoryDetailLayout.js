import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './HistoryDetailLayout.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HistoryDetailLayout = ({ detailData }) => {
  const navigation = useNavigation();
  const mapRef = useRef(null)
  const detail = detailData.allData;

  const timeSecond = (Math.floor(detail.time % 60) < 10) ? "0" + Math.floor(detail.time % 60) : Math.floor(detail.time % 60)
  const timeMinute = (Math.floor(detail.time / 60) < 10) ? "0" + Math.floor(detail.time / 60) : Math.floor(detail.time / 60)
  const timeHour = (Math.floor(detail.time / 3600) < 10) ? "0" + Math.floor(detail.time / 3600) : Math.floor(data.duration / 3600)

  useEffect(() => {
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    })
  }, [])

  return (
    <>
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left-circle" size={35} color="#816cf9" />
      </TouchableOpacity>
      <View>
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: detail.allCoords[0].latitude,
              longitude: detail.allCoords[0].longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              coordinate={{
                latitude: detail.allCoords[0].latitude,
                longitude: detail.allCoords[0].longitude
              }}
              identifier="origin"
            />
            <Marker
              coordinate={{
                latitude: detail.allCoords[detail.allCoords.length - 1].latitude,
                longitude: detail.allCoords[detail.allCoords.length - 1].longitude
              }}
              identifier="destination"
            />
            <Polyline
              coordinates={detail.allCoords}
              strokeColor="#816cf9"
              strokeWidth={6}
            />
          </MapView>
          <View style={styles.valuesContainer} >
            <View style={styles.innerContainer}>
              <Text style={styles.value} >{Math.floor((detail.distance) / (detail.time / 3600))}</Text>
              <Text style={styles.text} >Avg. pace (km/h)</Text>
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.value}>{timeHour}:{timeMinute}:{timeSecond}</Text>
              <Text style={styles.text} >Duration</Text>
            </View>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.value} >{detail.distance.toFixed(2)}</Text>
            <Text style={styles.text} >Distance (km)</Text>
          </View>
          <Text style={styles.date}>{detail.date} </Text>
        </View>
      </View>
    </>
  );
}

export default HistoryDetailLayout;
