import React from 'react';
import { View, Button, Text } from 'react-native';
import MapView, { Circle } from 'react-native-maps';

const DashboardLayout = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={{ flex: 1 }}
        pointerEvents="none"
      >
        <MapView
          style={{ flex: 1, opacity: 0.6 }}
          minZoomLevel={18}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Circle center={{
            latitude: 37.78825,
            longitude: -122.4324
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


export default DashboardLayout;
