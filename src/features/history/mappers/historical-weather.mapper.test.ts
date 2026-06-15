import { describe, it, expect } from "vitest";
import { mapHistoricalWeather } from "./historical-weather.mapper";
import type { OpenMeteoHistoricalResponse } from "../types/open-meteo-historical";

const mockResponse: OpenMeteoHistoricalResponse = {
  daily: {
    time: ["2026-06-10", "2026-06-11"],
    temperature_2m_max: [28, 30],
    temperature_2m_min: [15, 17],
    precipitation_probability_max: [40, 10],
    weather_code: [3, 0],
  },
};

describe("mapHistoricalWeather", () => {
  it("maps Open-Meteo historical response to HistoricalWeather array", () => {
    const result = mapHistoricalWeather(mockResponse);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      date: "2026-06-10",
      temperatureMax: 28,
      temperatureMin: 15,
      precipitationProbability: 40,
      weatherCode: 3,
    });
  });

  it("returns empty array for empty input", () => {
    const emptyResponse: OpenMeteoHistoricalResponse = {
      daily: {
        time: [],
        temperature_2m_max: [],
        temperature_2m_min: [],
        precipitation_probability_max: [],
        weather_code: [],
      },
    };
    const result = mapHistoricalWeather(emptyResponse);
    expect(result).toHaveLength(0);
  });
});
