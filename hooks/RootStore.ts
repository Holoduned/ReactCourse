import {WeatherForecastStore} from '../modules/weatherForecast/WeatherForecastStore.ts';
import React from 'react';

class RootStore {
  weatherForecastStore;

  constructor() {
    this.weatherForecastStore = new WeatherForecastStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
