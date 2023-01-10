import { databaseService } from './database';
import { WeatherGetAllResponseDto } from '@albert/shared/entities/dto';

class WeatherService {
  private getAll = () => {
    return databaseService.get('weather');
  };

  get = async (): Promise<WeatherGetAllResponseDto> => {
    const all = await this.getAll();
    return all.map(it => ({ id: it.id, country: it.country, city: it.city }));
  };

  getById = async (id: number) => {
    const all = await this.getAll();
    return all.find(it => it.id === id);
  };
}

export const weatherService = new WeatherService();
