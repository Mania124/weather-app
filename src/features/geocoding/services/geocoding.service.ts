import { mapLocations } from '../mappers/location.mapper';

export async function searchLocations(
  query: string
) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10`
  );

  const data = await response.json();

  return mapLocations(data);
}