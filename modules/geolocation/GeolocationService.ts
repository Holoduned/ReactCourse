import Geolocation from '@react-native-community/geolocation';
import {GeolocationModel} from './GeolocationModel.ts';

export default class GeolocationService {
  geolocation: GeolocationModel;

  constructor() {
    this.geolocation = new GeolocationModel(0,0);
  }

  fetchLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.geolocation.latitude = position.coords.latitude;
        this.geolocation.longitude = position.coords.longitude;
      },
    );
    return this.geolocation;
  };
}
