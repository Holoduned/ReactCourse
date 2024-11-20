import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useRootStore} from '../hooks/useRootStore.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {observer} from 'mobx-react';
import styles from '../stylesheets/WeatherForecastStyle';

export const WeatherForecastScreen = observer(
  ({navigation}: NativeStackScreenProps<any>) => {
    const {weatherForecastStore} = useRootStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async function() {
        await weatherForecastStore.getWeatherForecast();
        setIsLoading(false);
        console.log(weatherForecastStore.weatherForecast);
      })();
    }, [weatherForecastStore]);

    return (
      <SafeAreaView>
        <View>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <View style={styles.forecastContainer}>
              <Text style={styles.regText}>Location: {weatherForecastStore.weatherForecast.location}</Text>
              <Text style={styles.regText}>Temperature: {weatherForecastStore.weatherForecast.temp}°</Text>
              <Text style={styles.regText}>Feels like: {weatherForecastStore.weatherForecast.feels_like}°</Text>
              <Text style={styles.regText}>Humidity: {weatherForecastStore.weatherForecast.humidity}</Text>
              <Text style={styles.regText}>Condition: {weatherForecastStore.weatherForecast.condition}</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  },
);
