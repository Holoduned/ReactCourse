import WeatherForecastRepository from './WeatherForecastRepository.ts';
import {WeatherForecastModel} from './WeatherForecastModel.ts';

export default class WeatherForecastService {
  weatherForecastRepository;

  constructor() {
    this.weatherForecastRepository = new WeatherForecastRepository();
  }
  getItems = async ():Promise<WeatherForecastModel> => {
    const res = await this.weatherForecastRepository.getData();
    return res;
  };
}
