import React from 'react';
import { View, Button, Text } from 'react-native';
import MapView from 'react-native-maps';

const DashboardLayout = () => {
  return (
    <View>
      <Text>Start an activity!</Text>
      <MapView
        style={{ flex: 1, }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View >
  );
}


export default DashboardLayout;
