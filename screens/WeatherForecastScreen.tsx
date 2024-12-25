import {SafeAreaView, Text, View} from 'react-native';
import styles from '../stylesheets/WeatherForecastStyle';

export const WeatherForecastScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Начальная страница</Text>
      </View>
    </SafeAreaView>
  );
};
