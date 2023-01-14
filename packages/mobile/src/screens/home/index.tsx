import { StyleSheet, View, FlatList } from 'react-native';
import React, { useCallback, useState, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { weatherApiService } from '../../services/weatherApi';
import Loader from '../../components/loader';
import { WeatherGetAllResponseDto } from '@albert/shared/entities/dto';
import WeatherItem from '../../components/weatherItem';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { DataContext } from '../../context/dataContext';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [data, setData] = useState<WeatherGetAllResponseDto>();
  const { locationBackup, setLocationBackup } = useContext(DataContext);

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
    setLocationBackup(data ? data : locationBackup);
    navigation.navigate('WeatherInfo', item);
  };

  if (!data && !locationBackup) {
    return (
      <View style={styles.loadingView}>
        <Loader />
      </View>
    );
  }

  return (
    <FlatList
      data={data ? data : locationBackup}
      style={styles.list}
      initialNumToRender={10}
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
