import type { AirQuality } from "../types/air-quality";
import styles from "./AirQualityCard.module.css";

interface Props {
  airQuality: AirQuality;
}

export function AirQualityCard({ airQuality }: Props) {
  const getStatus = (
    value: number,
    type: "pm10" | "pm25" | "ozone"
  ): { label: string; className: string } => {
    if (type === "pm10") {
      if (value <= 45) return { label: "Good", className: styles.good };
      if (value <= 75) return { label: "Moderate", className: styles.moderate };
      return { label: "Poor", className: styles.poor };
    }
    if (type === "pm25") {
      if (value <= 15) return { label: "Good", className: styles.good };
      if (value <= 35) return { label: "Moderate", className: styles.moderate };
      return { label: "Poor", className: styles.poor };
    }
    if (value <= 60) return { label: "Good", className: styles.good };
    if (value <= 100) return { label: "Moderate", className: styles.moderate };
    return { label: "Poor", className: styles.poor };
  };

  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>Air Quality</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.label}>PM10</span>
          <span className={styles.value}>{airQuality.pm10} µg/m³</span>
          <span
            className={`${styles.status} ${getStatus(airQuality.pm10, "pm10").className}`}
          >
            {getStatus(airQuality.pm10, "pm10").label}
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>PM2.5</span>
          <span className={styles.value}>{airQuality.pm25} µg/m³</span>
          <span
            className={`${styles.status} ${getStatus(airQuality.pm25, "pm25").className}`}
          >
            {getStatus(airQuality.pm25, "pm25").label}
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Ozone</span>
          <span className={styles.value}>{airQuality.ozone} µg/m³</span>
          <span
            className={`${styles.status} ${getStatus(airQuality.ozone, "ozone").className}`}
          >
            {getStatus(airQuality.ozone, "ozone").label}
          </span>
        </div>
      </div>
    </section>
  );
}
