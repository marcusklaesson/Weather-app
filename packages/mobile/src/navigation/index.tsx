import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import WeatherInfoScreen from '../screens/weatherInfo';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WeatherInfo" component={WeatherInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
