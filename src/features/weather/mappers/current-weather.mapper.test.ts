import { describe, it, expect } from "vitest";
import { mapCurrentWeather } from "./current-weather.mapper";
import type { OpenMeteoCurrentResponse } from "../types/open-meteo";

const mockResponse: OpenMeteoCurrentResponse = {
  current: {
    time: "2026-06-15T12:00",
    temperature_2m: 25,
    relative_humidity_2m: 60,
    wind_speed_10m: 12,
    weather_code: 1,
  },
};

describe("mapCurrentWeather", () => {
  it("maps Open-Meteo current response to CurrentWeather", () => {
    const result = mapCurrentWeather(mockResponse);
    expect(result).toEqual({
      temperature: 25,
      humidity: 60,
      windSpeed: 12,
      weatherCode: 1,
      timestamp: "2026-06-15T12:00",
    });
  });

  it("handles zero values", () => {
    const zeroResponse: OpenMeteoCurrentResponse = {
      current: {
        time: "2026-06-15T00:00",
        temperature_2m: 0,
        relative_humidity_2m: 0,
        wind_speed_10m: 0,
        weather_code: 0,
      },
    };
    const result = mapCurrentWeather(zeroResponse);
    expect(result.temperature).toBe(0);
    expect(result.humidity).toBe(0);
    expect(result.windSpeed).toBe(0);
    expect(result.weatherCode).toBe(0);
    expect(result.timestamp).toBe("2026-06-15T00:00");
  });
});
