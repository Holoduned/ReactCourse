import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from '../stylesheets/WeatherForecastStyle';

export const ExampleScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Перешли на другую страницу</Text>
      </View>
    </SafeAreaView>
  );
}
