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

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText} onPress={() => {
            Alert.alert('Тревога');
          }}>
            текст маленький
          </Text>
          <Text numberOfLines={2} style={styles.titleText}>
            ТЕКСТ ПОБОЛЬШЕ
          </Text>
          <Text numberOfLines={1} ellipsizeMode={'middle'} style={styles.titleText}>
          {text}
          </Text>
        </View>

        <View style={[styles.textContainer, styles.midView]}>
          <Image
            alt='тут была картинка'
            style={styles.imagegggg}
            source={{ uri: 'https://s16.stc.all.kpcdn.net/family/wp-content/uploads/2024/06/n1.jpg' }}
          />
          <Image
            onLoad={() => {
              Alert.alert('пикча вжух');
            }}
            style={styles.imagegggg}
            source={{ uri: 'https://otkrytki.by/images/cards/image-virtoualnaya-kartinka-dobryj-den-prekrasnogo-dnya.jpg' }}
          />
          <Image
            blurRadius={5}
            style={styles.imagegggg}
            source={{ uri: 'https://s10.stc.all.kpcdn.net/family/wp-content/uploads/2024/08/o1.jpg' }}
          />
        </View>
        <View style={[styles.textContainer, styles.endView]}>
          <ScrollView horizontal={true}>
            <Text>
            {text}
            </Text>
          </ScrollView>
          <ScrollView nestedScrollEnabled={true} onScroll={() => {
            Alert.alert('вы поскролили');
          }} style={{height:30}}>
            <Text>
            {text}
            </Text>
          </ScrollView>
          <ScrollView scrollEnabled={false}>
            <Text>
              {text}
            </Text>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  imagegggg: {
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
  }
});

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
export default App;
