import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../Navigation/routes';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import styles from './Dashboard.style';

const DashboardLayout = ({ onSignOut }) => {
  const navigation = useNavigation();

  const handleGoActivity = _ => {
    navigation.navigate(routes.ACTIVITY_PAGE,);
  }
  const handleGoHistory = _ => {
    navigation.navigate(routes.HISTORY_PAGE,);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity >
          <Icon name="menu" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="history" size={35} color="white" onPress={handleGoHistory} />
        </TouchableOpacity>
      </View> */}
      <Text style={styles.headerText}>Wanna Run?</Text>
      <TouchableWithoutFeedback onPress={handleGoActivity}>
        <View style={styles.topContainer}>
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.mainTitle}>Wanna</Text>
              <Text style={styles.mainTitle}>Run</Text>
              <Text style={styles.mainTitle}>Today?</Text>
            </View>
            <Image style={styles.activityImage} source={require('../../../assets/images/running-girl.png')} />
          </View>
          <Icon name="chevron-right" size={60} color="white" />
        </View>
      </TouchableWithoutFeedback>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.subContainers, styles.history]} >
          <Text style={styles.title}>Activity History</Text>
          <Icon style={styles.icon} name="history" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainers, styles.leaderboard]} >
          <Text style={styles.title}>Leaderboard</Text>
          <Icon style={styles.icon} name="trophy" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainers, styles.options]} >
          <Text style={styles.title}>Options</Text>
          <Icon style={styles.icon} name="cog" size={60} color="white" />
        </TouchableOpacity>
      </ScrollView>

      {/* <Button style={styles.button} title='Yeni Aktivite' />
      <Button style={styles.historyButton} title='Aktivite Geçmişi' />
      <Button style={styles.leaderboardButton} title='Leaderboard' /> */}
      {/* <Button style={styles.activityButton} title='Sign Out' onPress={onSignOut} /> */}
    </View >
  );
}


export default DashboardLayout;
