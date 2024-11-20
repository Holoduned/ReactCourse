import { makeAutoObservable} from 'mobx';
import WeatherForecastService from './WeatherForecastService.ts';
import {WeatherForecastModel} from './WeatherForecastModel.ts';

export class WeatherForecastStore {
    weatherForecastService;
    weatherForecast?: WeatherForecastModel;

    isLoaded: boolean;

    constructor() {
        makeAutoObservable(this);
        this.weatherForecastService = new WeatherForecastService();
        this.isLoaded = false;
    }

    getWeatherForecast = async () => {
        this.setLoadingState(true);
        this.weatherForecast = await this.weatherForecastService.getItems();
        setTimeout(() => this.setLoadingState(false), 1000);
    };

    private setLoadingState = (flag: boolean) => this.isLoaded = flag;
}

