import { CurrentWeatherCard } from "@/features/weather/components/CurrentWeatherCard";
import { HourlyForecastCard } from "@/features/weather/components/HourlyForecastCard";

export function DashboardPage() {
  return (
    <main>
      <h1>Meteomania</h1>
      <p>Weather intelligence dashboard</p>
      <CurrentWeatherCard latitude={-1.286389} longitude={36.817223} />

      <HourlyForecastCard latitude={-1.286389} longitude={36.817223} />
    </main>
  );
}
