import { get } from "@/shared/services/openMeteoClient";

import { mapCurrentWeather } from "../mappers/current-wather.mappers";

import type { CurrentWeather } from "../types/current-weather";

import type { OpenMeteoCurrentResponse } from "../types/open-meteo";

export async function getCurrentWeather(
  latitude: number,
  longitude: number,
): Promise<CurrentWeather> {
  const response = await get<OpenMeteoCurrentResponse>(
    `/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
  );

  return mapCurrentWeather(response);
}
