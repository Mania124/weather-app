import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LocationProvider } from "@/features/geocoding/context/location-provider";
import { ThemeProvider } from "@/features/theme/context/theme-provider";
import { DashboardPage } from "@/pages/Dashboard/DashboardPage";

vi.mock("@/features/weather/hooks/use-weather-overview", () => ({
  useWeatherOverview: () => ({
    data: {
      current: {
        temperature: 22,
        humidity: 65,
        windSpeed: 10,
        weatherCode: 1,
        timestamp: "2026-06-15T12:00",
      },
      hourly: [
        {
          time: "2026-06-15T12:00",
          temperature: 22,
          precipitationProbability: 20,
          weatherCode: 1,
        },
        {
          time: "2026-06-15T13:00",
          temperature: 23,
          precipitationProbability: 15,
          weatherCode: 0,
        },
      ],
      daily: [
        {
          date: "2026-06-15",
          minTemperature: 15,
          maxTemperature: 28,
          weatherCode: 3,
        },
        {
          date: "2026-06-16",
          minTemperature: 17,
          maxTemperature: 30,
          weatherCode: 0,
        },
      ],
    },
    isLoading: false,
    error: null,
  }),
}));

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
}

function renderWithProviders(ui: React.ReactElement) {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocationProvider>
          <BrowserRouter>{ui}</BrowserRouter>
        </LocationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

describe("DashboardPage integration", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("renders the dashboard with weather data", () => {
    renderWithProviders(<DashboardPage />);
    expect(screen.getByText("Meteomania")).toBeDefined();
    expect(screen.getByText("Weather intelligence dashboard")).toBeDefined();
    expect(screen.getByText("Current Weather")).toBeDefined();
    expect(screen.getByText("Temperature")).toBeDefined();
    expect(screen.getByText("Humidity")).toBeDefined();
    expect(screen.getByText("Wind")).toBeDefined();
    expect(screen.getAllByText("22°C").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("65%")).toBeDefined();
    expect(screen.getByText("10 km/h")).toBeDefined();
    expect(screen.getByText("Hourly Forecast")).toBeDefined();
  });

  it("renders LocationSearch component", () => {
    renderWithProviders(<DashboardPage />);
    expect(screen.getByPlaceholderText("Search city...")).toBeDefined();
  });
});
