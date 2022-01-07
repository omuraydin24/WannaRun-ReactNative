import React from 'react';
import { View, Text } from 'react-native';

import styles from './LeaderboardCard.style';

const Leaderboardcard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{data.id}</Text>

      <Text style={styles.values}>{Math.round(data.distance * 1000)}</Text>
      <Text style={styles.values}>{data.duration}</Text>
    </View>
  );
}

export default Leaderboardcard;
