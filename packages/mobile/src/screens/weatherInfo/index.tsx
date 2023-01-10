import { StyleSheet, Text, View } from 'react-native';

const WeatherInfoScreen = () => {
  const renderMonthlyData = () => {
    return null;
  };

  return (
    <View style={styles.root}>
      <Text style={styles.cityText}>City text from last view</Text>
      <Text style={styles.countryText}>Country text from last view</Text>
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
