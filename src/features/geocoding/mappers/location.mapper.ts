import type { Location } from '../types/location';
import type { OpenMeteoGeocodingResponse } from '../types/open-meteo-geocoding';


export function mapLocations(
  response: OpenMeteoGeocodingResponse
): Location[] {
  return (response.results ?? []).map((location) => ({
    id: String(location.id),

    name: location.name,

    country: location.country,

    latitude: location.latitude,

    longitude: location.longitude,

    timezone: location.timezone,
  }));
}