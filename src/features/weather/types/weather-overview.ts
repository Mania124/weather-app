import type { CurrentWeather } from "./current-weather";
import type { HourlyForecast } from "./hourly-forecast";
import type { DailyForecast } from "./daily-forecast";

export interface WeatherOverview {
  current: CurrentWeather;

  hourly: HourlyForecast[];

  daily: DailyForecast[];
}
