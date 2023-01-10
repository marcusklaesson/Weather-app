import React from 'react';
import { WeatherGetAllResponseDto } from '@albert/shared/entities/dto';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  data: WeatherGetAllResponseDto[0];
  onPress: () => void;
}

const WeatherItem: React.FC<Props> = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.cityText}>{data.city}</Text>
      <Text>{data.country}</Text>
    </TouchableOpacity>
  );
};

export default WeatherItem;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ccc',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  cityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
