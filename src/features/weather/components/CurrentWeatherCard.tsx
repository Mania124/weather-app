import type { CurrentWeather } from "../types/current-weather";
import styles from "./CurrentWeatherCard.module.css";

interface Props {
  weather: CurrentWeather;
}

export function CurrentWeatherCard({ weather }: Props) {
  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>Current Weather</h2>
      <div className={styles.row}>
        <span className={styles.label}>Temperature</span>
        <span className={styles.value}>{weather.temperature}°C</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Humidity</span>
        <span className={styles.value}>{weather.humidity}%</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Wind</span>
        <span className={styles.value}>{weather.windSpeed} km/h</span>
      </div>
    </section>
  );
}
