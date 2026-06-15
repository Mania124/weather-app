import { useHourlyForecast } from "../hooks/use-hourly-forecast";

interface Props {
  latitude: number;
  longitude: number;
}

export function HourlyForecastCard({ latitude, longitude }: Props) {
  const { data, isLoading } = useHourlyForecast(latitude, longitude);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const next24Hours = data?.slice(0, 24);

  return (
    <section>
      <h2>Hourly Forecast</h2>

      {next24Hours?.map((hour) => (
        <div key={hour.time}>
          <strong>{hour.time}</strong>
          {" - "}
          {hour.temperature}
          °C
        </div>
      ))}
    </section>
  );
}
