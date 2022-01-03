import React from 'react';
import { View } from 'react-native';
import DashboardLayout from './DashboardLayout';
import auth from '@react-native-firebase/auth';

const Dashboard = () => {

  const handleSignOut = () => auth().signOut();

  return (
    <DashboardLayout onSignOut={handleSignOut} />
  );
}

export default Dashboard;
