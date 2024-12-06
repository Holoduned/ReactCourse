import {WeatherForecastStore} from '../modules/weatherForecast/WeatherForecastStore.ts';
import {LocalStore} from '../modules/asyncStorage/LocalStore.ts';
import React from 'react';

class RootStore {
  weatherForecastStore;
  localStore;
  constructor() {
    this.weatherForecastStore = new WeatherForecastStore();
    this.localStore = new LocalStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
