import React, { useEffect } from 'react';
import { View } from 'react-native';
import Navigation from "./Navigation";
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}
