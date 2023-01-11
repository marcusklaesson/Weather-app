import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  WeatherInfo: {
    city: string;
    country: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'WeatherInfo'
>;

export type WeatherInfoScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'WeatherInfo'
>;
