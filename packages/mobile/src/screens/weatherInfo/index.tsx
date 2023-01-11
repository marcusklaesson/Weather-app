import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { WeatherInfoScreenRouteProp } from '../../navigation/types';

const WeatherInfoScreen = () => {
  const route = useRoute<WeatherInfoScreenRouteProp>();
  const { city, country } = route.params;

  const renderMonthlyData = () => {
    return null;
  };

  return (
    <View style={styles.root}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.countryText}>{country}</Text>
      {renderMonthlyData()}
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
});
