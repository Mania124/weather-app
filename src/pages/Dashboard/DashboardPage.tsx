import { LocationSearch } from "@/features/geocoding/components/LocationSearch";
import { useLocation } from "@/features/geocoding/hooks/use-location";
import { CurrentWeatherCard } from "@/features/weather/components/CurrentWeatherCard";
import { HourlyForecastCard } from "@/features/weather/components/HourlyForecastCard";
import { DailyForecastCard } from "@/features/weather/components/DailyForecastCard";
import { AirQualityCard } from "@/features/air-quality/components/AirQualityCard";
import { useWeatherOverview } from "@/features/weather/hooks/use-weather-overview";
import { useAirQuality } from "@/features/air-quality/hooks/use-air-quality";
import styles from "./DashboardPage.module.css";

export function DashboardPage() {
  const { location } = useLocation();
  const { data: weatherData, isLoading: weatherLoading, error: weatherError } =
    useWeatherOverview(location.latitude, location.longitude);
  const { data: airQualityData, isLoading: airLoading, error: airError } =
    useAirQuality(location.latitude, location.longitude);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Meteomania</h1>
      <p className={styles.subtitle}>Weather intelligence dashboard</p>
      <LocationSearch />
      <p className={styles.location}>
        {location.name}, {location.country}
      </p>

      {weatherLoading && <p className={styles.status}>Loading weather data...</p>}
      {weatherError && (
        <p className={styles.statusError}>Failed to load weather. Please try again.</p>
      )}
      {weatherData && (
        <div className={styles.cards}>
          <CurrentWeatherCard weather={weatherData.current} />
          <HourlyForecastCard forecast={weatherData.hourly} />
          <DailyForecastCard forecast={weatherData.daily} />
        </div>
      )}

      {airLoading && <p className={styles.status}>Loading air quality...</p>}
      {airError && (
        <p className={styles.statusError}>Failed to load air quality. Please try again.</p>
      )}
      {airQualityData && <AirQualityCard airQuality={airQualityData} />}
    </main>
  );
}
