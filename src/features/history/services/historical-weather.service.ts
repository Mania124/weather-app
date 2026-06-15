import { get } from "@/shared/services/openMeteoClient";
import { mapHistoricalWeather } from "../mappers/historical-weather.mapper";
import type { HistoricalWeather } from "../types/historical-weather";
import type { OpenMeteoHistoricalResponse } from "../types/open-meteo-historical";

export async function getHistoricalWeather(
  latitude: number,
  longitude: number,
  startDate: string,
  endDate: string
): Promise<HistoricalWeather[]> {
  const response = await get<OpenMeteoHistoricalResponse>(
    `/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code`
  );
  return mapHistoricalWeather(response);
}
