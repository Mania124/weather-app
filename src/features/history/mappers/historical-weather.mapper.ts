import type { HistoricalWeather } from "../types/historical-weather";
import type { OpenMeteoHistoricalResponse } from "../types/open-meteo-historical";

export function mapHistoricalWeather(response: OpenMeteoHistoricalResponse): HistoricalWeather[] {
  const result: HistoricalWeather[] = [];
  const total = response.daily.time.length;
  for (let i = 0; i < total; i++) {
    result.push({
      date: response.daily.time[i],
      temperatureMax: response.daily.temperature_2m_max[i],
      temperatureMin: response.daily.temperature_2m_min[i],
      precipitationProbability: response.daily.precipitation_probability_max[i],
      weatherCode: response.daily.weather_code[i],
    });
  }
  return result;
}
