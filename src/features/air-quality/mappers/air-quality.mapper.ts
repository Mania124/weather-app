import type { AirQuality } from "../types/air-quality";
import type { OpenMeteoAirQualityResponse } from "../types/open-meteo-air-quality";

export function mapAirQuality(response: OpenMeteoAirQualityResponse): AirQuality {
  return {
    pm10: response.current.pm10,
    pm25: response.current.pm2_5,
    ozone: response.current.ozone,
    timestamp: response.current.time,
  };
}
