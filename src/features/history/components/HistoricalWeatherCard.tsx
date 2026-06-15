import type { HistoricalWeather } from "../types/historical-weather";
import styles from "./HistoricalWeatherCard.module.css";

interface Props {
  data: HistoricalWeather[];
  startDate: string;
  endDate: string;
}

export function HistoricalWeatherCard({ data, startDate, endDate }: Props) {
  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>
        Historical Weather ({startDate} — {endDate})
      </h2>
      <div className={styles.list}>
        {data.map((day) => (
          <div key={day.date} className={styles.row}>
            <span className={styles.date}>{day.date}</span>
            <span className={styles.temp}>
              {day.temperatureMax}° / {day.temperatureMin}°
            </span>
            <span className={styles.precip}>
              {day.precipitationProbability}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
