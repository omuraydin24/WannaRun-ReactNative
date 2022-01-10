import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './HistoryCard.style';

const HistoryCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.distanceNumber}>{item.allData.distance.toFixed(2)}</Text>
          <Text style={styles.distanceText}>Distance (km)</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.date}>{item.allData.date}</Text>
        </View>
        <Icon name="arrow-right" size={35} color="white" />
      </View>
    </TouchableOpacity>
  );
}

export default HistoryCard;
