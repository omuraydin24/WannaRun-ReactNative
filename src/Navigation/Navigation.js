import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activity from '../Pages/Activity';
import Dashboard from '../Pages/Dashboard';
import SignIn from '../Pages/Auth/SignIn';
import SignUp from "../Pages/Auth/SignUp";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from "./routes";
import auth from '@react-native-firebase/auth'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  // const navTheme = DefaultTheme;
  // navTheme.colors.background = theme == 'light' ? 'green' : 'blue';

  const DetailStack = () => {
    const [hasSession, setHasSession] = useState(null)

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(setHasSession)
      return subscriber;
    }, [])

    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!!hasSession ? (
          <>
            <Stack.Screen name={routes.DASHBOARD_PAGE} component={Dashboard} />
            <Stack.Screen name={routes.ACTIVITY_PAGE} component={Activity} />
          </>
        ) : (
          <>
            <Stack.Screen name={routes.SIGN_IN_PAGE} component={SignIn} />
            <Stack.Screen name={routes.SIGN_UP_PAGE} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "white",
            height: 65,
          },
          tabBarLabelStyle: {
            bottom: 10,
            // fontFamily: 'Proxima Nova Semibold',
            // fontSize: fontSize.small,
          },
        }}
      >
        <Tab.Screen
          name="MainTab"
          component={DetailStack}
        // options={{
        //   tabBarLabel: t("Comics"),
        //   tabBarIcon: ({ focused, color, size }) => {
        //     return <Icon name="skull" size={size} color={color} />;
        //   },
        // }}
        />
        {/* <Tab.Screen
          name={routes.CHARACTERS}
          component={CharacterDetailStack}
          options={{
            tabBarLabel: t("Characters"),
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon name="account-cowboy-hat" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name={routes.FAVORITES}
          component={FavoriteTab}
          options={{
            tabBarLabel: t("Favorites"),
            // unmountOnBlur: true,
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name="star" size={size} color={color} />;
            },
          }}
          // listeners={({ navigation }) => ({
          //   blur: () => navigation.setParams({ screen: undefined }),
          // })}
        />
        <Tab.Screen
          name={routes.SETTINGS}
          component={Settings}
          options={{
            tabBarLabel: t("Settings"),
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
