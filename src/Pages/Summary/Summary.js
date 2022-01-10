import React, { useRef } from 'react';
import { Alert, BackHandler } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';

import Summarylayout from './SummaryLayout';

const Summary = ({ route, navigation }) => {

  const viewRef = useRef();
  const { allData } = route.params;

  BackHandler.addEventListener('hardwareBackPress', () => navigation.pop(1))

  const handleShare = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.7,
      });
      await Share.open({ url: uri });
    } catch (err) {
      Alert.alert('WannaRun', 'An error occurred')
    }
  };

  return (
    <Summarylayout allData={allData} onPressShare={handleShare} onPressBack={() => navigation.pop(2)} viewRef={viewRef} />
  );
}

export default Summary;