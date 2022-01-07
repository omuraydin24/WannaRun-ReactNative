import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import useFetch from '../../../Hooks/useFetch/useFetch';
import styles from './WeatherCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const WeatherCard = ({ currentLocation }) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?`
  const key = "aaa08ccab0c3f63c453af161448be1e3"

  const {
    data: weatherData,
    loading
  } = useFetch(`${URL}lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=metric&appid=${key}`);

  console.log("weatherData", weatherData);

  if (loading == true) {
    return <ActivityIndicator size="small" />
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.conditionImage} source={{ uri: `http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png` }} />
        <Text style={styles.weatherText} >{(Math.round(weatherData?.main.temp * 2) / 2).toFixed(1)} °C</Text>
      </View>
      <View style={styles.subContainer}>
        <Icon name="water-percent" size={30} color="white" />
        <Text style={styles.weatherText} >{weatherData?.main.humidity} %</Text>
      </View>
    </View>
  );
}

export default WeatherCard;
