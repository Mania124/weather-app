import { LocationSearch } from "@/features/geocoding/components/LocationSearch";
import { useLocation } from "@/features/geocoding/hooks/use-location";
import { CurrentWeatherCard } from "@/features/weather/components/CurrentWeatherCard";
import { HourlyForecastCard } from "@/features/weather/components/HourlyForecastCard";

export function DashboardPage() {
  const { location } = useLocation();

  return (
    <main>
      <h1>Meteomania</h1>
      <p>Weather intelligence dashboard</p>
      <LocationSearch />
      <p>
        {location.name}, {location.country}
      </p>

      <CurrentWeatherCard
        latitude={location.latitude}
        longitude={location.longitude}
      />

      <HourlyForecastCard
        latitude={location.latitude}
        longitude={location.longitude}
      />
    </main>
  );
}
