import weather from './weather.json';
import { sleep } from '../../helpers/utils';
import { Weather } from '@albert/shared/entities/weather';

type Data = Record<'weather', Weather[]>;

class DatabaseService {
  private readonly data: Data;

  constructor() {
    this.data = { weather };
  }

  async get(index: keyof Data) {
    // Fake latency to emulate long wait times
    await sleep(+(process.env.FAKE_LATENCY || 0));
    return this.data[index];
  }
}

export const databaseService = new DatabaseService();
