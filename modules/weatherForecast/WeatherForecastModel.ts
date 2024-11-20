export class WeatherForecastModel{
  location: string = '';
  condition: string = '';
  feels_like: string = '';
  humidity: string = '';
  temp: string = '';

  constructor(location: string, condition: string, feels_like: string, humidity: string, temp: string) {
    this.location = location;
    this.condition = condition;
    this.feels_like = feels_like;
    this.humidity = humidity;
    this.temp = temp;
  }

}
