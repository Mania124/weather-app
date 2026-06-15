import type { HourlyForecast } from "../types/hourly-forecast";
import type { OpenMeteoHourlyResponse } from "../types/open-meteo";

export function mapHourlyForecast(
  response: OpenMeteoHourlyResponse,
): HourlyForecast[] {
  const result: HourlyForecast[] = [];

  const total = response.hourly.time.length;

  for (let i = 0; i < total; i++) {
    result.push({
      time: response.hourly.time[i],

      temperature: response.hourly.temperature_2m[i],

      precipitationProbability: response.hourly.precipitation_probability[i],

      weatherCode: response.hourly.weather_code[i],
    });
  }

  return result;
}
