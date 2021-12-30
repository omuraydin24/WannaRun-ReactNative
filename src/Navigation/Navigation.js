import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activity from '../Pages/Activity';
import Dashboard from '../Pages/Dashboard';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  // const navTheme = DefaultTheme;
  // navTheme.colors.background = theme == 'light' ? 'green' : 'blue';

  const DetailStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="YeniAktivite" component={Activity} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={{
      //   headerShown: false,
      //   tabBarActiveTintColor: colors.accentColor,
      //   tabBarInactiveTintColor: colors.white,
      //   tabBarStyle: {
      //     backgroundColor: colors.black,
      //     height: 65,
      //   },
      //   tabBarLabelStyle: {
      //     bottom: 10,
      //     // fontFamily: 'Proxima Nova Semibold',
      //     // fontSize: fontSize.small,
      //   },
      // }}
      >
        <Tab.Screen
          name="DashboardTab"
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
