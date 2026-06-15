import { useQuery } from "@tanstack/react-query";
import { getHourlyForecast } from "../services/weather.service";

export function useHourlyForecast(latitude: number, longitude: number) {
  return useQuery({
    queryKey: ["hourly-forecast", latitude, longitude],

    queryFn: () => getHourlyForecast(latitude, longitude),
  });
}
