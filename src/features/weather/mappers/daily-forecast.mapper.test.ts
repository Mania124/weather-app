import { describe, it, expect } from "vitest";
import { mapDailyForecast } from "./daily-forecast.mapper";
import type { OpenMeteoForecastResponse } from "../types/open-meteo";

const mockResponse: OpenMeteoForecastResponse = {
  current: {
    time: "2026-06-15T12:00",
    temperature_2m: 22,
    relative_humidity_2m: 60,
    wind_speed_10m: 10,
    weather_code: 1,
  },
  hourly: {
    time: [],
    temperature_2m: [],
    precipitation_probability: [],
    weather_code: [],
  },
  daily: {
    time: ["2026-06-15", "2026-06-16"],
    temperature_2m_max: [28, 30],
    temperature_2m_min: [15, 17],
    precipitation_probability_max: [40, 10],
    weather_code: [3, 0],
  },
};

describe("mapDailyForecast", () => {
  it("maps Open-Meteo daily response to DailyForecast array", () => {
    const result = mapDailyForecast(mockResponse);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      date: "2026-06-15",
      minTemperature: 15,
      maxTemperature: 28,
      weatherCode: 3,
    });
    expect(result[1]).toEqual({
      date: "2026-06-16",
      minTemperature: 17,
      maxTemperature: 30,
      weatherCode: 0,
    });
  });

  it("returns empty array for empty input", () => {
    const emptyResponse: OpenMeteoForecastResponse = {
      current: {
        time: "",
        temperature_2m: 0,
        relative_humidity_2m: 0,
        wind_speed_10m: 0,
        weather_code: 0,
      },
      hourly: {
        time: [],
        temperature_2m: [],
        precipitation_probability: [],
        weather_code: [],
      },
      daily: {
        time: [],
        temperature_2m_max: [],
        temperature_2m_min: [],
        precipitation_probability_max: [],
        weather_code: [],
      },
    };
    const result = mapDailyForecast(emptyResponse);
    expect(result).toHaveLength(0);
  });
});
