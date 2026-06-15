import { useCurrentWeather } from "../hooks/use-current-weather";

interface Props {
  latitude: number;
  longitude: number;
}

export function CurrentWeatherCard({ latitude, longitude }: Props) {
  const { data, isLoading, error } = useCurrentWeather(latitude, longitude);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load weather.</p>;
  }

  return (
    <section>
      <h2>Current Weather</h2>

      <p>
        Temperature:
        {data?.temperature}°C
      </p>

      <p>
        Humidity:
        {data?.humidity}%
      </p>

      <p>
        Wind:
        {data?.windSpeed} km/h
      </p>
    </section>
  );
}
