/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
import {LangType} from './modules/lang/LangType.ts';
import {Button, SafeAreaView, Text} from 'react-native';
import LangStore from './modules/lang/LangStore.ts';

const langStore = new LangStore();

const handleChangeLang = async () => {
  await langStore.changeLang(
    LangType.RU === langStore.lang ? LangType.EN : LangType.RU,
  );
};
const App = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <Text>{t('main.header')}</Text>
      <Text>{t('main.text')}</Text>
      <Text>{t('main.help')}</Text>
      <Text>{t('main.interpolation', {date: new Date()})}</Text>
      <Button title="Изменить язык" onPress={() => handleChangeLang()} />
    </SafeAreaView>
  );
};

export default App;
