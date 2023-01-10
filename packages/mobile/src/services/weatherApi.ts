import axios, { AxiosInstance } from 'axios';
import {
  WeatherGetAllResponseDto,
  WeatherGetByIdResponseDto,
} from '@albert/shared/entities/dto';

class WeatherApiService {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:12345',
    });
  }

  get = async (): Promise<WeatherGetAllResponseDto> => {
    const { data } = await this.axios.get('/weather');
    return data;
  };

  getById = async (id: number): Promise<WeatherGetByIdResponseDto> => {
    const { data } = await this.axios.get(`/weather/${id}`);
    return data;
  };
}

export const weatherApiService = new WeatherApiService();
