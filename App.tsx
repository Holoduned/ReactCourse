/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {WeatherForecastScreen} from './screens/WeatherForecastScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './android/navigation/Navigation.ts';
import {ExampleScreen} from './screens/ExampleScreen.tsx';
import {Linking} from 'react-native';
import {DeepLinking} from './android/navigation/DeepLinking.ts';

const HomeworkStack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);
  return (
    <NavigationContainer
      linking={DeepLinking.linking}
      ref={Navigation.navigationRef}>
      <HomeworkStack.Navigator>
        <HomeworkStack.Screen
          name="Weather Forecast"
          component={WeatherForecastScreen}
        />
        <HomeworkStack.Screen name="ExampleScreen" component={ExampleScreen} />
      </HomeworkStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
