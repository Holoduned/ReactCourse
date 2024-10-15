import React from "react";
import { Text, Button, Image, Animated, Easing, View, Settings } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/screens/HomeScreen";
import { AboutScreen } from "./components/screens/AboutScreen";
import { NewsScreen } from "./components/screens/NewsScreen";
import { ChatScreen } from "./components/screens/ChatScreen";
import { SettingsScreen } from "./components/screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false}} />
      <Tab.Screen name="News" component={NewsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
const HomeStack = ({ navigation }: NativeStackScreenProps<any>) => {
  let spinValue = new Animated.Value(0);
  // First set up animation
  Animated.loop(
    Animated.timing(
      spinValue,
      {
       toValue: 1,
       duration: 3000,
       easing: Easing.linear,
       useNativeDriver: true
      }
    )
   ).start();
  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'}
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: (props) => <Animated.Image
          style={{transform: [{rotate: spin}] }}
          source={{uri: 'https://media1.tenor.com/m/6kHRicAptuoAAAAC/sunday-hsr.gif'}} width={80} height={80}/>,
          headerRight: () => (
            <Button
              title="About"
              color="#000"
              onPress={() => {
                navigation.navigate('About')
              }}
            />
          )
        }}
      />
      <Stack.Screen name={'About'} component={AboutScreen} initialParams={{ itemId: 42 }} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Tab'} component={TabNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}