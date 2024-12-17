import axios, {AxiosRequestConfig} from 'axios';
import {Platform} from 'react-native';

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
    this.api.defaults.headers.common['X-Yandex-Weather-Key'] = 'c31c6682-dc79-400e-8ec3-2815fefaa506';
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
