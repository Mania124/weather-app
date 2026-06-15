import type { DailyForecast } from "../types/daily-forecast";
import type { OpenMeteoForecastResponse } from "../types/open-meteo";

export function mapDailyForecast(
  response: OpenMeteoForecastResponse,
): DailyForecast[] {
  const result: DailyForecast[] = [];

  const total = response.daily.time.length;

  for (let i = 0; i < total; i++) {
    result.push({
      date: response.daily.time[i],

      minTemperature: response.daily.temperature_2m_min[i],

      maxTemperature: response.daily.temperature_2m_max[i],

      weatherCode: response.daily.weather_code[i],
    });
  }

  return result;
}
