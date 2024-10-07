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
        <View style={[styles.componentContainer, styles.commonMargin]}>
          <Text style={styles.titleText}>Текст</Text>
          <Text style={styles.regularText} onPress={() => {
            Alert.alert('Тревога');
          }}>
            Нажми на меня
          </Text>
          <Text numberOfLines={2} style={styles.regularText}>
            Этот текст усечен - {text}
          </Text>
          <Text numberOfLines={1} ellipsizeMode={'middle'} style={styles.regularText}>
          Этот тоже, но иначе - {text}
          </Text>
        </View>

        <View style={[styles.componentContainer, styles.midView, styles.commonMargin]}>
        <Text style={styles.titleText}>Изображения</Text>
          <Image
            alt='тут была картинка'
            style={styles.image}
            source={{ uri: 'https://s16.stc.all.kpcdn.net/family/wp-content/uploads/2024/06/n1.jpg' }}
          />
          <Text style={styles.regularText}>У меня есть alt</Text>
          <Image
            onLoad={() => {
              Alert.alert('пикча вжух');
            }}
            style={styles.image}
            source={{ uri: 'https://otkrytki.by/images/cards/image-virtoualnaya-kartinka-dobryj-den-prekrasnogo-dnya.jpg' }}
          />
          <Text style={styles.regularText}>Я даю alert при загрузке</Text>

          <Image
            blurRadius={5}
            style={styles.image}
            source={{ uri: 'https://s10.stc.all.kpcdn.net/family/wp-content/uploads/2024/08/o1.jpg' }}
          />
          <Text style={styles.regularText}>Я мыльный</Text>

        </View>
        <View style={[styles.componentContainer, styles.endView, styles.commonMargin]}>
        <Text style={styles.titleText}>Прокрут</Text>
          <ScrollView horizontal={true} style={styles.commonMargin}>
            <Text>
            {text}
            </Text>
          </ScrollView>
          <Text style={styles.regularText}>Я горизонтальный</Text>
          <ScrollView nestedScrollEnabled={true}  onScroll={() => {
            Alert.alert('вы поскролили');
          }} style={[styles.commonMargin,styles.height]}>
            <Text>
            {text}
            </Text>
          </ScrollView>
          <Text style={styles.regularText}>Я вызываю alert</Text>
          <ScrollView scrollEnabled={false} style={styles.commonMargin}>
            <Text>
              {text}
            </Text>
          </ScrollView>
          <Text style={styles.regularText}>Мне запретили скролить</Text>
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
