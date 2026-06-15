import { useQuery } from "@tanstack/react-query";
import { getHistoricalWeather } from "../services/historical-weather.service";

export function useHistoricalWeather(
  latitude: number,
  longitude: number,
  startDate: string,
  endDate: string
) {
  return useQuery({
    queryKey: ["historical-weather", latitude, longitude, startDate, endDate],
    queryFn: () =>
      getHistoricalWeather(latitude, longitude, startDate, endDate),
    staleTime: 1000 * 60 * 10,
    enabled: Boolean(latitude && longitude && startDate && endDate),
  });
}
