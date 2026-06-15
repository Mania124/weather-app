export interface OpenMeteoCurrentResponse {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}
export interface OpenMeteoHourlyResponse {
  hourly: {
    time: string[];

    temperature_2m: number[];

    precipitation_probability: number[];

    weather_code: number[];
  };
}