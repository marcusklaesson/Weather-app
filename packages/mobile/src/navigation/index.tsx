import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import WeatherInfoScreen from '../screens/weatherInfo';
import { HomeStackNavigatorParamList } from './types';
import { WeatherGetAllResponseDto } from '../../../shared/entities/dto';
import { DataContext } from '../context/dataContext';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const Navigation = () => {
  const [locationBackup, setLocationBackup] =
    useState<WeatherGetAllResponseDto>() as any;

  const [weatherBackup, setWeatherBackup] = useState<WeatherGetAllResponseDto>(
    [],
  ) as any;

  return (
    <DataContext.Provider
      value={{
        locationBackup,
        setLocationBackup,
        weatherBackup,
        setWeatherBackup,
      }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="WeatherInfo" component={WeatherInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
};

export default Navigation;
