import { useQuery } from "@tanstack/react-query";
import { getAirQuality } from "../services/air-quality.service";

export function useAirQuality(latitude: number, longitude: number) {
  return useQuery({
    queryKey: ["air-quality", latitude, longitude],
    queryFn: () => getAirQuality(latitude, longitude),
    staleTime: 1000 * 60 * 10,
  });
}
