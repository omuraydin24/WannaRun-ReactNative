import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../Navigation/routes';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './DashboardLayout.style';

const DashboardLayout = ({ userData, onSignOut }) => {
  const navigation = useNavigation();
  // console.log("layoutuserData", userData)
  const handleGoActivity = _ => {
    navigation.navigate(routes.ACTIVITY_PAGE,);
  }
  const handleGoHistory = _ => {
    navigation.navigate(routes.HISTORY_PAGE,);
  }
  const handleGoLeaderboard = _ => {
    navigation.navigate(routes.LEADERBOARD_PAGE,);
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
      <View style={styles.infoContainer}>
        {userData &&
          <>
            <Text style={styles.infoTitle}>Welcome back <Text style={styles.infoValue}>{userData.username}</Text> !</Text>
            <Text style={styles.infoTitle}>You had <Text style={styles.infoValue}>{userData.activityNumber}</Text> sessions so far.</Text>
            <Text style={styles.infoTitle}>Total distance you made: <Text style={styles.infoValue}>{userData.distance.toFixed(2)}</Text> km</Text>
            <Text style={styles.infoTitle}>Total duration of your activities: <Text style={styles.infoValue}>{userData.duration}</Text></Text>
          </>
        }
      </View>
      <TouchableWithoutFeedback onPress={handleGoActivity}>
        <View style={styles.midContainer}>
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.mainTitle}>Wanna</Text>
              <Text style={styles.mainTitle}>Run</Text>
              <Text style={styles.mainTitle}>Today?</Text>
            </View>
            <Image style={styles.activityImage} source={require('../../../assets/images/running-girl.png')} />
          </View>
          <Icon name="chevron-right-circle" size={60} color="white" />
        </View>
      </TouchableWithoutFeedback>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.subContainers, styles.history]} onPress={handleGoHistory}>
          <Text style={styles.title}>Activity History</Text>
          <Icon style={styles.icon} name="history" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainers, styles.leaderboard]} onPress={handleGoLeaderboard} >
          <Text style={styles.title}>Leaderboard</Text>
          <Icon style={styles.icon} name="trophy" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainers, styles.signout]} onPress={onSignOut} >
          <Text style={styles.title}>Sign Out</Text>
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
