import {makeAutoObservable} from 'mobx';
import WeatherForecastService from '../modules/weatherForecast/WeatherForecastService.ts';

class MobxStore {
  apiService;
  items: any;

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.apiService = new WeatherForecastService();
  }

  getItems = () => {
    this.setIsLoading(true);

    this.apiService
      .getItems()
      .then(result => {
        this.setItems(result);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  };

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };
  setItems = (result: any) => {
    this.items = result;
  };
}
