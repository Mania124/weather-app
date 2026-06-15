import type { AirQuality } from "../types/air-quality";
import type { OpenMeteoAirQualityResponse } from "../types/open-meteo-air-quality";
import { mapAirQuality } from "../mappers/air-quality.mapper";

const AIR_QUALITY_BASE_URL = 'https://air-quality-api.open-meteo.com/v1';

export async function getAirQuality(
  latitude: number,
  longitude: number
): Promise<AirQuality> {
  const response = await fetch(
    `${AIR_QUALITY_BASE_URL}/air-quality?latitude=${latitude}&longitude=${longitude}&current=pm10,pm2_5,ozone`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch air quality data');
  }

  const data: OpenMeteoAirQualityResponse = await response.json();
  return mapAirQuality(data);
}
