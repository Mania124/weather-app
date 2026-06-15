import { useQuery } from "@tanstack/react-query";

import { getCurrentWeather } from "../services/weather.service";

export function useCurrentWeather(latitude: number, longitude: number) {
  return useQuery({
    queryKey: ["current-weather", latitude, longitude],

    queryFn: () => getCurrentWeather(latitude, longitude),
  });
}
