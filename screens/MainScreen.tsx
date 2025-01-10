import {SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomIcon} from '../assets/components/icons/Icon.ts';

export const MainScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40,
          fontFamily: 'RubikBubbles-Regular'}}>Я должен быть красивым текстом
        </Text>
        <Text style={{fontSize: 40}}>Я должен быть обычным текстом</Text>
      </View>
      <View>
        <Text>Я обычная иконка</Text>
        <Icon name="gift" size={30} color="#900" />
      </View>
      <View>
        <Text>Я шрифтовая иконка</Text>
        <CustomIcon name={'ic_fluent_search_24_regular'} size={24} color={'red'} />
        <CustomIcon name="ic_fluent_home_28_regular" color={'#666666'} size={28} />
      </View>
    </SafeAreaView>
  );
};
