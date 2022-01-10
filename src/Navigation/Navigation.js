import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Activity from '../Pages/Activity';
import Dashboard from '../Pages/Dashboard';
import SignIn from '../Pages/Auth/SignIn';
import SignUp from "../Pages/Auth/SignUp";
import History from "../Pages/History";
import HistoryDetail from "../Pages/HistoryDetail";
import Summary from "../Pages/Summary";
import routes from "./routes";
import auth from '@react-native-firebase/auth'
import Leaderboard from '../Pages/Leaderboard';

const Stack = createStackNavigator();

const Navigation = () => {
  const [hasSession, setHasSession] = useState(null)
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setHasSession)
    return subscriber;
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!!hasSession ? (
          <>
            <Stack.Screen name={routes.DASHBOARD_PAGE} component={Dashboard} />
            <Stack.Screen name={routes.ACTIVITY_PAGE} component={Activity} />
            <Stack.Screen name={routes.SUMMARY_PAGE} component={Summary} />
            <Stack.Screen name={routes.LEADERBOARD_PAGE} component={Leaderboard} />
            <Stack.Screen name={routes.HISTORY_PAGE} component={History} />
            <Stack.Screen name={routes.HISTORY_DETAIL_PAGE} component={HistoryDetail} />
          </>
        ) : (
          <>
            <Stack.Screen name={routes.SIGN_IN_PAGE} component={SignIn} />
            <Stack.Screen name={routes.SIGN_UP_PAGE} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
