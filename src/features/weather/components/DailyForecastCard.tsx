import type { DailyForecast } from "@/features/weather/types/daily-forecast";
import { getWeatherDescription } from "@/features/weather/utils/weather-codes";
import styles from "./DailyForecastCard.module.css";

interface Props {
  forecast: DailyForecast[];
}

export function DailyForecastCard({ forecast }: Props) {
  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>7-Day Forecast</h2>
      <div className={styles.list}>
        {forecast.map((day) => (
          <div key={day.date} className={styles.row}>
            <span className={styles.date}>{day.date}</span>
            <span className={styles.temp}>
              {day.maxTemperature}° / {day.minTemperature}°
            </span>
            <span className={styles.code}>{getWeatherDescription(day.weatherCode)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
