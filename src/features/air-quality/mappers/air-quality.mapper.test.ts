import { describe, it, expect } from "vitest";
import { mapAirQuality } from "./air-quality.mapper";
import type { OpenMeteoAirQualityResponse } from "../types/open-meteo-air-quality";

const mockResponse: OpenMeteoAirQualityResponse = {
  current: {
    time: "2026-06-15T12:00",
    pm10: 25,
    pm2_5: 12,
    ozone: 45,
  },
};

describe("mapAirQuality", () => {
  it("maps Open-Meteo air quality response to AirQuality", () => {
    const result = mapAirQuality(mockResponse);
    expect(result).toEqual({
      pm10: 25,
      pm25: 12,
      ozone: 45,
      timestamp: "2026-06-15T12:00",
    });
  });
});
