import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { WeatherInfoScreenRouteProp } from '../../navigation/types';
import { weatherApiService } from '../../services/weatherApi';
import WeatherDetailItem from '../../components/weatherDetailItem';
import { WeatherGetByIdResponseDto } from '@albert/shared/entities/dto';
import Loader from '../../components/loader';

const WeatherInfoScreen = () => {
  const route = useRoute<WeatherInfoScreenRouteProp>();
  const { city, country, id } = route.params;
  const [data, setData] = useState<WeatherGetByIdResponseDto>();

  useEffect(() => {
    let mounted = true;

    (async () => {
      const weatherData = await weatherApiService.getById(id);

      if (mounted) {
        setData(weatherData);
      }
    })();
    return () => {
      setData(undefined);
      mounted = false;
    };
  }, [id]);

  if (!data) {
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
        data={[data]}
        style={styles.list}
        contentContainerStyle={styles.listContent}
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
