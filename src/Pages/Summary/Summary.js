import React, { useRef } from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './Summary.style';
const Summary = ({ route, navigation }) => {
  const viewRef = useRef();
  const { allData } = route.params;
  console.log("Summary alldata:", allData)

  const handleShare = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.7,
      });
      await Share.open({ url: uri });
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <View style={styles.container} collapsable={false} ref={viewRef} >
      <View style={styles.valuesContainer}>
        <Text style={styles.value}>{allData.distance.toFixed(2)}</Text>
        <Text style={styles.title}>Distance you run (km)</Text>
        <Text style={styles.value}>{allData.time}</Text>
        <Text style={styles.title}>Duration of the run</Text>
        <Text style={styles.value}>{Math.floor((allData.distance) / (allData.time / 3600))} km/h</Text>
        <Text style={styles.title}>Avg. pace of the run</Text>
      </View>
      <TouchableWithoutFeedback onPress={handleShare}>
        <View style={styles.shareContainer}>
          <Icon name="share-variant" size={35} color="white" />
          <Text style={styles.shareText}>Share your effort!</Text>
        </View>
      </TouchableWithoutFeedback>
    </View >
  );
}

export default Summary;
