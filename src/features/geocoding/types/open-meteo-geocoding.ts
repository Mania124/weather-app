export interface OpenMeteoGeocodingResponse {
  results: {
    id: number;

    name: string;

    country: string;

    latitude: number;

    longitude: number;

    timezone: string;
  }[];
}