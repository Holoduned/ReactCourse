import {
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useRootStore} from '../hooks/useRootStore.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {observer} from 'mobx-react';
import styles from '../stylesheets/WeatherForecastStyle';
import {LocalStore} from '../modules/asyncStorage/LocalStore.ts';

export const WeatherForecastScreen = observer(
  ({navigation}: NativeStackScreenProps<any>) => {
    const {weatherForecastStore} = useRootStore();
    const {localStore} = useRootStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async function() {
        await weatherForecastStore.getWeatherForecast();
        await localStore.getLocalItems();
        setIsLoading(false);
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
        <View>
          <Text style={styles.title}>Async Storage</Text>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : localStore.localData && localStore.localData[0]?.key && localStore.localData[0]?.value ? (
            <View style={styles.forecastContainer}>
              <Text style={styles.regText}>Key: {localStore.localData[0].key}</Text>
              <Text style={styles.regText}>Value: {localStore.localData[0].value}</Text>
            </View>
          ) : (
            <View style={styles.forecastContainer}>
              <Text style={styles.regText}>No data available</Text>
            </View>
          )}
        </View>
        <Button title={'Add Storage Item'} onPress={() => localStore.addLocalData('Current-weather', weatherForecastStore.weatherForecast)}></Button>
        <Button title={'Delete Storage Item'} onPress={localStore.removeAllItems}></Button>
      </SafeAreaView>
    );
  },
);
