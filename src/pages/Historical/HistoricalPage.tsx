import { useState } from "react";
import { useLocation } from "@/features/geocoding/hooks/use-location";
import { useHistoricalWeather } from "@/features/history/hooks/use-historical-weather";
import { HistoricalWeatherCard } from "@/features/history/components/HistoricalWeatherCard";
import { LocationSearch } from "@/features/geocoding/components/LocationSearch";
import styles from "./HistoricalPage.module.css";

export function HistoricalPage() {
  const { location } = useLocation();
  const [startDate, setStartDate] = useState("2026-01-01");
  const [endDate, setEndDate] = useState("2026-01-07");
  const { data, isLoading, error } = useHistoricalWeather(
    location.latitude,
    location.longitude,
    startDate,
    endDate
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Historical Weather</h1>
      <p className={styles.subtitle}>
        Look up past weather for {location.name}, {location.country}
      </p>
      <LocationSearch />
      <p className={styles.location}>
        {location.name}, {location.country}
      </p>

      <div className={styles.controls}>
        <label className={styles.label}>
          Start Date
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          End Date
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={styles.input}
          />
        </label>
      </div>

      {isLoading && <p className={styles.status}>Loading historical data...</p>}
      {error && (
        <p className={styles.statusError}>Failed to load historical data. Please try again.</p>
      )}
      {data && <HistoricalWeatherCard data={data} startDate={startDate} endDate={endDate} />}
    </main>
  );
}
