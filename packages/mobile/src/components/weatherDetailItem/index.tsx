import React from 'react';
import { WeatherGetByIdResponseDto } from '@albert/shared/entities/dto';
import { Text, StyleSheet, View } from 'react-native';

interface Props {
  data: WeatherGetByIdResponseDto;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WeatherDetailItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.monthlyAvg.map((value, index) => {
        return (
          <View key={index} style={styles.root}>
            <Text style={styles.monthText}>
              {months.map((month, idx) => (idx === index ? month : null))}
            </Text>
            <View style={styles.detailContainer}>
              <Text>Info:</Text>
              <Text style={styles.detailText}>
                High: {value.high} | Low: {value.low} | Dry: {value.dryDays} |
                Rain: {value.rainfall} | Snow: {value.snowDays}
              </Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default WeatherDetailItem;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ccc',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  monthText: {
    fontSize: 16,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    flex: 1,
    marginStart: 10,
  },
});
