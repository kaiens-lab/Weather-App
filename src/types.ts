export interface WeatherData {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    is_day: number;
    cloud: number;
    humidity: number;
    wind_kph: number;
  };
}
