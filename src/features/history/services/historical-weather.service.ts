import { mapHistoricalWeather } from "../mappers/historical-weather.mapper";
import type { HistoricalWeather } from "../types/historical-weather";
import type { OpenMeteoHistoricalResponse } from "../types/open-meteo-historical";

const HISTORICAL_BASE_URL = 'https://archive-api.open-meteo.com/v1';

export async function getHistoricalWeather(
  latitude: number,
  longitude: number,
  startDate: string,
  endDate: string
): Promise<HistoricalWeather[]> {
  const response = await fetch(
    `${HISTORICAL_BASE_URL}/archive?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch historical weather data');
  }

  const data: OpenMeteoHistoricalResponse = await response.json();
  return mapHistoricalWeather(data);
}
