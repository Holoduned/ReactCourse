import {
  SafeAreaView,
  StyleSheet,
  View,
  Switch, Text,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react';
import 'react-native-get-random-values';
import {IColors, ThemeTypes} from '../src/modules/theme/ThemeTypes.ts';
import {useTheme} from '../src/modules/theme/hooks/useTheme.ts';
import {ThemedText} from '../components/ThemedText.tsx';
import {ThemedView} from '../components/ThemedView.tsx';
import {ThemeContext} from '../src/modules/theme/ThemeProvider.tsx';

export const TaskView = observer(
  () => {
    const useStyles = (colors: IColors) =>
      StyleSheet.create({
        content: {
          flex: 1,
          backgroundColor: colors.backgroundPrimary,
        },
      });
    const {Colors} = useTheme();
    const themedStyles = useStyles(Colors);
    const themeContext = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
      themeContext?.changeTheme(isEnabled ? ThemeTypes.LIGHT : ThemeTypes.DARK);
      setIsEnabled(previousState => !previousState);
    };
    return (
      <SafeAreaView style={themedStyles.content}>
        <View style={styles.centeredView}>
          <ThemedText><Text style={styles.title}>Theme</Text></ThemedText>
          <ThemedView />
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </SafeAreaView>
    );
  },
);
const styles = StyleSheet.create({
  centeredView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})
