import { useQuery } from '@tanstack/react-query';

import { searchLocations } from '../services/geocoding.service';

export function useLocationSearch(
  query: string
) {
  return useQuery({
    queryKey: ['location-search', query],

    queryFn: () =>
      searchLocations(query),

    enabled: query.length >= 2,
  });
}