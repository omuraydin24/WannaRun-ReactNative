import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../Navigation/routes';
import auth from '@react-native-firebase/auth';


const DashboardLayout = ({ onSignOut }) => {
  const navigation = useNavigation();

  const handleGoActivity = _ => {
    navigation.navigate(routes.ACTIVITY_PAGE,);

  }

  return (
    <View>
      <Text>Welcome Back!</Text>
      <Button title='Yeni Aktivite' onPress={handleGoActivity} />
      <Button title='Aktivite Geçmişi' />
      <Button title='Leaderboard' />
      <Button title='Sign Out' onPress={onSignOut} />
    </View >
  );
}


export default DashboardLayout;
