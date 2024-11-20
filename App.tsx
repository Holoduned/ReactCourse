/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {WeatherForecastScreen} from './screens/WeatherForecastScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const HomeworkStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <HomeworkStack.Navigator>
        <HomeworkStack.Screen name="Weather Forecast" component={WeatherForecastScreen} />
      </HomeworkStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
