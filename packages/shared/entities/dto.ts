import { Weather } from './weather';

export type WeatherGetAllResponseDto = Pick<
  Weather,
  'id' | 'country' | 'city'
>[];
export type WeatherGetByIdResponseDto = Weather;
