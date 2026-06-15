import { get } from '@/shared/services/openMeteoClient';

import { mapCurrentWeather } from '../mappers/current-weather.mapper';
import { mapHourlyForecast } from '../mappers/hourly-forecast.mapper';
import { mapDailyForecast } from '../mappers/daily-forecast.mapper';

import type { WeatherOverview } from '../types/weather-overview';
import type { OpenMeteoForecastResponse } from '../types/open-meteo';

export async function getWeatherOverview(
  latitude: number,
  longitude: number
): Promise<WeatherOverview> {
  const response =
    await get<OpenMeteoForecastResponse>(
      `/forecast?latitude=${latitude}&longitude=${longitude}
      &current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code
      &hourly=temperature_2m,precipitation_probability,weather_code
      &daily=temperature_2m_min,temperature_2m_max,weather_code`
        .replace(/\s+/g, '')
    );

  return {
    current:
      mapCurrentWeather(response),

    hourly:
      mapHourlyForecast(response),

    daily:
      mapDailyForecast(response),
  };
}