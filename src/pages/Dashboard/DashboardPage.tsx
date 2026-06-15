import { LocationSearch } from "@/features/geocoding/components/LocationSearch";
import { useLocation } from "@/features/geocoding/hooks/use-location";
import { CurrentWeatherCard } from "@/features/weather/components/CurrentWeatherCard";
import { HourlyForecastCard } from "@/features/weather/components/HourlyForecastCard";
import { useWeatherOverview } from "@/features/weather/hooks/use-weather-overview";
import styles from "./DashboardPage.module.css";

export function DashboardPage() {
  const { location } = useLocation();
  const { data, isLoading, error } = useWeatherOverview(
    location.latitude,
    location.longitude,
  );
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Meteomania</h1>
      <p className={styles.subtitle}>Weather intelligence dashboard</p>
      <LocationSearch />
      <p className={styles.location}>
        {location.name}, {location.country}
      </p>

      {isLoading && <p className={styles.status}>Loading weather data...</p>}
      {error && (
        <p className={styles.statusError}>Failed to load weather. Please try again.</p>
      )}
      {data && (
        <div className={styles.cards}>
          <CurrentWeatherCard weather={data.current} />
          <HourlyForecastCard forecast={data.hourly} />
        </div>
      )}
    </main>
  );
}
