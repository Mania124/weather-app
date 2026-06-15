import { get } from "@/shared/services/openMeteoClient";
import { mapCurrentWeather } from "../mappers/current-weather.mapper";
import type { CurrentWeather } from "../types/current-weather";
import type { OpenMeteoCurrentResponse } from "../types/open-meteo";
import { mapHourlyForecast } from "../mappers/hourly-forecast.mapper";
import type { HourlyForecast } from "../types/hourly-forecast";
import type { OpenMeteoHourlyResponse } from "../types/open-meteo";

export async function getCurrentWeather(
  latitude: number,
  longitude: number,
): Promise<CurrentWeather> {
  const response = await get<OpenMeteoCurrentResponse>(
    `/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
  );

  return mapCurrentWeather(response);
}

export async function getHourlyForecast(
  latitude: number,
  longitude: number
): Promise<HourlyForecast[]> {
  const response =
    await get<OpenMeteoHourlyResponse>(
      `/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weather_code`
    );

  return mapHourlyForecast(
    response
  );
}