import { createContext } from 'react';

export const DataContext = createContext({
  locationBackup: [],
  setLocationBackup: [],
  weatherBackup: [],
  setWeatherBackup: [],
});
