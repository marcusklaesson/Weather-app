import { StyleSheet, View, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { weatherApiService } from '../../services/weatherApi';
import Loader from '../../components/loader';
import { WeatherGetAllResponseDto } from '@albert/shared/entities/dto';
import WeatherItem from '../../components/weatherItem';

const HomeScreen: React.FC = () => {
  const [data, setData] = useState<WeatherGetAllResponseDto>();

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      (async () => {
        const weatherData = await weatherApiService.get();

        if (mounted) {
          setData(weatherData);
        }
      })();

      return () => {
        // This should clear all data when the user navigates to another scene (needed to illustrate problems in task 3)
        setData(undefined);
        mounted = false;
      };
    }, []),
  );

  const onWeatherItemClick = (item: WeatherGetAllResponseDto[0]) => () => {
    return;
  };

  if (!data) {
    return (
      <View style={styles.loadingView}>
        <Loader />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item }) => (
        <WeatherItem
          key={item.id}
          data={item}
          onPress={onWeatherItemClick(item)}
        />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 5,
  },
});
