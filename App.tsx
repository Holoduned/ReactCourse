/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet} from 'react-native';
import {TaskView} from './View/TaskView.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';

const HomeworkStack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Host>
        <NavigationContainer>
          <HomeworkStack.Navigator>
            <HomeworkStack.Screen name="To-do list" component={TaskView} />
          </HomeworkStack.Navigator>
        </NavigationContainer>
      </Host>
    </GestureHandlerRootView>
  );
};

export default App;
