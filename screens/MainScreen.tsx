import {SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const MainScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40,
          fontWeight: 'normal',
          fontFamily: 'Rubik Bubbles'}}>Я должен быть красивым текстом
        </Text>
      </View>
      <View>
        <Text>Я обычная иконка</Text>
        <Icon name="gift" size={30} color="#900" />
      </View>
    </SafeAreaView>
  );
};
