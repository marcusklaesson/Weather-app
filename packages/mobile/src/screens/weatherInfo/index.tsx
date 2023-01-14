import React, { useState, useContext, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { WeatherInfoScreenRouteProp } from '../../navigation/types';
import { weatherApiService } from '../../services/weatherApi';
import WeatherDetailItem from '../../components/weatherDetailItem';
import { WeatherGetByIdResponseDto } from '@albert/shared/entities/dto';
import Loader from '../../components/loader';
import { DataContext } from '../../context/dataContext';

const WeatherInfoScreen = () => {
  const route = useRoute<WeatherInfoScreenRouteProp>();
  const [data, setData] = useState<WeatherGetByIdResponseDto>();
  const { weatherBackup, setWeatherBackup } = useContext(DataContext);
  const { city, country, id } = route.params;

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      (async () => {
        const weatherData = await weatherApiService.getById(id);

        if (mounted) {
          setData(weatherData);
          setCurrentWeatherBackup(weatherData);
        }
      })();
      return () => {
        setData(undefined);
        mounted = false;
      };
    }, [id]),
  );

  function setCurrentWeatherBackup(weatherData: any) {
    var index = weatherBackup.findIndex(value => value['id'] === id);
    var valueDontExist = index === -1;

    if (valueDontExist) {
      setWeatherBackup([...weatherBackup, weatherData]);
    } else {
      console.log('Current Weather item already exist in backup list...');
    }
  }

  function getCurrentWeatherBackup() {
    var weather_tmp: any[] = [];
    weatherBackup.map(weather => {
      if (weather['id'] === id) {
        weather_tmp.push(weather);
      }
    });
    return weather_tmp;
  }

  if (!data && getCurrentWeatherBackup().length === 0) {
    return (
      <View style={styles.loadingView}>
        <Loader />
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.countryText}>{country}</Text>
      <FlatList
        data={data ? [data] : getCurrentWeatherBackup()}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        initialNumToRender={12}
        renderItem={({ item }) => (
          <WeatherDetailItem key={item.id} data={item} />
        )}
      />
    </View>
  );
};

export default WeatherInfoScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  cityText: {
    fontSize: 36,
  },
  countryText: {
    fontSize: 18,
    color: '#555',
  },
  list: {
    padding: 5,
  },
  listContent: {
    paddingBottom: 100,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
