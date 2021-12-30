import React from 'react';
import { View, Button, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const DashboardLayout = () => {
  const navigation = useNavigation();

  const handleGoActivity = _ => {
    navigation.navigate("YeniAktivite", );

  }

  return (
    <View>
      <Text>Welcome Back!</Text>
      <Button title='Yeni Aktivite' onPress={handleGoActivity} />
      <Button title='Aktivite Geçmişi' />
      <Button title='Leaderboard' />
    </View >
  );
}


export default DashboardLayout;
