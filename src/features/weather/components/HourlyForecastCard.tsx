import type { HourlyForecast } from '../types/hourly-forecast';
import styles from './HourlyForecastCard.module.css';

interface Props {
  forecast: HourlyForecast[];
}

export function HourlyForecastCard({ forecast }: Props) {
  const next24Hours = forecast.slice(0, 24);

  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>Hourly Forecast</h2>
      <div className={styles.grid}>
        {next24Hours.map((hour) => (
          <div key={hour.time} className={styles.cell}>
            <span className={styles.time}>{hour.time}</span>
            <span className={styles.temp}>{hour.temperature}°C</span>
          </div>
        ))}
      </div>
    </section>
  );
}
