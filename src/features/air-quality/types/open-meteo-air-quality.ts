export interface OpenMeteoAirQualityResponse {
  current: {
    time: string;
    pm10: number;
    pm2_5: number;
    ozone: number;
  };
}
