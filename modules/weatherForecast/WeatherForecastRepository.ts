import {WeatherForecastModel} from './WeatherForecastModel.ts';
import AxiosClient from '../axios/AxiosClient.ts';
import LocalRepository from '../asyncStorage/LocalRepository.ts';

export default class WeatherForecastRepository {
  apiClient: AxiosClient;

  constructor() {
    this.apiClient = new AxiosClient();
  }

  getData = async ():Promise<WeatherForecastModel> => {
    return this.apiClient.get({}).then(result => {
      let data = result.data;
      let model = new WeatherForecastModel(data.info.tzinfo.name, data.fact.condition, data.fact.feels_like, data.fact.humidity, data.fact.temp);
      return model;
    });
  };
}
