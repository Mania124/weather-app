import { LocationSearch } from "@/features/geocoding/components/LocationSearch";
import { useLocation } from "@/features/geocoding/hooks/use-location";
import { useWeatherOverview } from "@/features/weather/hooks/use-weather-overview";
import { DailyForecastCard } from "@/features/weather/components/DailyForecastCard";
import styles from "./DailyForecastPage.module.css";

export function DailyForecastPage() {
  const { location } = useLocation();
  const { data, isLoading, error } = useWeatherOverview(
    location.latitude,
    location.longitude
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>7-Day Forecast</h1>
      <p className={styles.subtitle}>Extended outlook for your location</p>
      <LocationSearch />
      <p className={styles.location}>
        {location.name}, {location.country}
      </p>

      {isLoading && <p className={styles.status}>Loading forecast...</p>}
      {error && (
        <p className={styles.statusError}>Failed to load forecast. Please try again.</p>
      )}
      {data && <DailyForecastCard forecast={data.daily} />}
    </main>
  );
}
