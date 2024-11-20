import axios, {AxiosRequestConfig} from 'axios';
import {Platform} from 'react-native';
import {API_KEY} from '@env';

import GeolocationService from '../geolocation/GeolocationService.ts';


export default class AxiosClient {
  static SUCCESS_STATUSES = [200, 201];
  static SERVER_ERROR = 500;
  api;

  geolocationService = new GeolocationService();
  geolocation = this.geolocationService.fetchLocation();

  constructor(config?: AxiosRequestConfig) {
    this.api = axios.create(config);
    this.api.defaults.baseURL = this.getDefaultBaseUrl();
    this.api.defaults.headers.common['App-Platform'] = Platform.OS;
    this.api.defaults.headers.common['Content-Type'] = 'application/json';
    this.api.defaults.headers.common['X-Yandex-Weather-Key'] = process.env.API_KEY;
  }
  getDefaultBaseUrl = () => {
    return `https://api.weather.yandex.ru/v2/forecast?lat=${this.geolocation.latitude}&lon=${this.geolocation.longitude}`;
  };
  get = (config?: any) => {
    return this.api.get(this.getDefaultBaseUrl(), config.config);
  };
  post = (config?: any) => {
    return this.api.post(config.url, config.data, config.config);
  };
  put = (config?: any) => {
    return this.api.put(config.url, config.data, config.config);
  };
  delete = (config?: any) => {
    return this.api.delete(config.url, config.config);
  };
}
