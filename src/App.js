import React from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from "./Navigation";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      {/* <StatusBar
        animated={true}
        backgroundColor="red"
        translucent={true} /> */}
    </View>
  );
}
