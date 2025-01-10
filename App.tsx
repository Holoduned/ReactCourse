/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
import {LangType} from './modules/lang/LangType.ts';
import {Button, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import LangStore from './modules/lang/LangStore.ts';
import styles from './stylesheets/MainStyle';

const langStore = new LangStore();

const handleChangeLang = async (lang: LangType) => {
  await langStore.changeLang(lang);
};

const App = () => {
  const {t} = useTranslation(['main']);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{t('header')}</Text>
      <Text>{t('text')}</Text>
      <Text>{t('help')}</Text>
      <Text>{t('interpolation', {date: new Date()})}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleChangeLang(LangType.EN)}>
        <Text>Английский</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleChangeLang(LangType.RU)}>
        <Text>Русский</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
