import { useQuery } from "@tanstack/react-query";
import { getWeatherOverview } from "../services/weather-overview.service";

export function useWeatherOverview(latitude: number, longitude: number) {
  return useQuery({
    queryKey: ["weather-overview", latitude, longitude],

    queryFn: () => getWeatherOverview(latitude, longitude),

    staleTime: 1000 * 60 * 10,
  });
}
