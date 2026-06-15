import type { OpenMeteoCurrentResponse } from "../types/open-meteo";

import type { CurrentWeather } from "../types/current-weather";

export function mapCurrentWeather(
  response: OpenMeteoCurrentResponse,
): CurrentWeather {
  return {
    temperature: response.current.temperature_2m,
    humidity: response.current.relative_humidity_2m,
    windSpeed: response.current.wind_speed_10m,
    weatherCode: response.current.weather_code,
    timestamp: response.current.time,
  };
}
