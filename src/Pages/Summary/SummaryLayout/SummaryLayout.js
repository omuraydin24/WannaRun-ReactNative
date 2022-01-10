import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './SummaryLayout.style';
const Summarylayout = ({ viewRef, onPressShare, onPressBack, allData }) => {
  const timeSecond = (Math.floor(allData.time % 60) < 10) ? "0" + Math.floor(allData.time % 60) : Math.floor(allData.time % 60)
  const timeMinute = (Math.floor(allData.time / 60) < 10) ? "0" + Math.floor(allData.time / 60) : Math.floor(allData.time / 60)
  const timeHour = (Math.floor(allData.time / 3600) < 10) ? "0" + Math.floor(allData.time / 3600) : Math.floor(allData.duration / 3600)

  return (
    <>
      <TouchableOpacity style={styles.goBack} onPress={onPressBack}>
        <Icon name="arrow-left-circle" size={35} color="white" />
      </TouchableOpacity>
      <View style={styles.container} collapsable={false} ref={viewRef} >
        <View style={styles.valuesContainer}>
          <Text style={styles.value}>{allData.distance.toFixed(2)}</Text>
          <Text style={styles.title}>Distance you run (km)</Text>
          <Text style={styles.value}>{timeHour}:{timeMinute}:{timeSecond}</Text>
          <Text style={styles.title}>Duration of the activity</Text>
          <Text style={styles.value}>{Math.floor((allData.distance) / (allData.time / 3600))} km/h</Text>
          <Text style={styles.title}>Avg. pace of the run</Text>
        </View>
        <TouchableWithoutFeedback onPress={onPressShare}>
          <View style={styles.shareContainer}>
            <Icon name="share-variant" size={35} color="white" />
            <Text style={styles.shareText}>Share your effort!</Text>
          </View>
        </TouchableWithoutFeedback>
      </View >
    </>
  );
}

export default Summarylayout;
