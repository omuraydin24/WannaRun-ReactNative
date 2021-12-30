import React from 'react';
import { View, Text } from 'react-native';

const Activitycard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Something</Text>
      <Text style={styles.title} >Monday</Text>
      <Text style={styles.description}>Monday morning run</Text>
      <View style={styles.innerContainer} >
        <View style={styles.lengthContainer} >
          <Text style={styles.subCount}>Kilometer placeholder</Text>
          <Text style={styles.subTitle}>Kilometer</Text>
        </View>
        <View style={styles.paceContainer} >
          <Text style={styles.subCount}>Pace placeholder</Text>
          <Text style={styles.subTitle}>Avg. Pace</Text>
        </View>
        <View style={styles.timeContainer} >
          <Text style={styles.subCount}>Time placeholder</Text>
          <Text style={styles.subTitle}>Time</Text>
        </View>
      </View>
    </View>
  );
}

export default Activitycard;
