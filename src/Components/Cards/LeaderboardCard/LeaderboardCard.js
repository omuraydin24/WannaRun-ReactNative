import React from 'react';
import { View, Text } from 'react-native';

import styles from './LeaderboardCard.style';

const LeaderboardCard = ({ data }) => {
  const timeSecond = (Math.floor(data.duration % 60) < 10) ? "0" + Math.floor(data.duration % 60) : Math.floor(data.duration % 60)
  const timeMinute = (Math.floor(data.duration / 60) < 10) ? "0" + Math.floor(data.duration / 60) : Math.floor(data.duration / 60)
  const timeHour = (Math.floor(data.duration / 3600) < 10) ? "0" + Math.floor(data.duration / 3600) : Math.floor(data.duration / 3600)

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{data.username}</Text>
      <Text style={styles.values}>{Math.round(data.distance * 1000)} km</Text>
      <Text style={styles.values}>{timeHour}:{timeMinute}:{timeSecond}</Text>
    </View>
  );
}

export default LeaderboardCard;
