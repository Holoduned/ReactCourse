/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {TaskView} from './View/TaskView.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';
import {ThemeProvider} from './src/modules/theme/ThemeProvider.tsx';

const HomeworkStack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
    <GestureHandlerRootView style={{flex: 1}}>
      <Host>
        <NavigationContainer>
          <HomeworkStack.Navigator>
            <HomeworkStack.Screen name="Theme" component={TaskView} />
          </HomeworkStack.Navigator>
        </NavigationContainer>
      </Host>
    </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
