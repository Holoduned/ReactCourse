/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ButtonText } from './components/buttonText';
import { TextInput1, TextInput2, TextInput3 } from './components/textInput';
import { CustomComponent1 } from './components/box';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={[styles.componentContainer, styles.commonMargin]}>
          <Text style={styles.titleText}>Button Text</Text>
          <ButtonText/>
          <Text style={styles.titleText}>Text Input</Text>
          <TextInput1/>
          <TextInput2/>
          <TextInput3/>
          <CustomComponent1/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  componentContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  regularText: {
    fontSize: 20,
  },
  image: {
    margin: 10,
    width: '100%',
    resizeMode: 'center',
    height: 200
  },
  midView: {
    borderWidth: 2,
    borderColor: 'pink'
  },
  endView:{
    backgroundColor:'lightpink'
  },
  commonMargin:{
    margin:10
  },
  height:{
    height:30
  }
});

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
export default App;
