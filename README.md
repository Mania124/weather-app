# Meteomania

## Overview

Meteomania is a weather intelligence dashboard built with React, TypeScript, and Vite, powered by Open-Meteo APIs.

The primary goal of this project is not simply displaying weather information, but demonstrating:

- Clean architecture
- API integration patterns
- Strong TypeScript usage
- Domain-driven data modeling
- Scalable frontend design
- Fast feature delivery through reusable abstractions

This project serves as a portfolio-quality example of consuming external APIs and translating raw data into a clean, maintainable user experience.

---

## Project Objectives

### Functional Objectives

- Current weather conditions
- Hourly weather forecasts
- Daily weather forecasts
- 7-day forecast (separate page)
- Air quality summary
- Historical weather lookup
- City search and geocoding
- Favorite locations
- Recent searches
- Unit conversion (Metric / Imperial)

### Engineering Objectives

- Feature-based architecture
- Service layer abstraction
- API response mapping
- Type-safe data models
- Query caching and synchronization
- Reusable UI components
- Responsive design

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite

### Data Fetching

- TanStack Query (React Query)

### Routing

- React Router

### Visualization

- Recharts

### Weather Provider

- Open-Meteo

### State Persistence

- Local Storage

---

## Open-Meteo APIs

### Current Weather

Used to display:

- Temperature
- Humidity
- Wind Speed
- Weather Conditions

### Hourly Forecast

Used for:

- Temperature trends
- Rain probability
- Wind trends

### Daily Forecast

Used for:

- Multi-day forecasts
- Min/Max temperatures
- Weather summaries

### Air Quality

Used to display:

- PM2.5
- PM10
- Ozone

### Historical Weather

Used to:

- Search weather conditions for previous dates
- Compare trends

### Geocoding

Used to:

- Search cities
- Retrieve coordinates

---

## Architecture Philosophy

The application follows a layered architecture.

Raw API responses should never be consumed directly by UI components.

Instead:

```text
API Response
    ↓
Mapper
    ↓
Domain Model
    ↓
React Components
```

This allows:

- Easier testing
- Better maintainability
- API independence
- Stronger typing

---

## Project Structure

```text
src/
├── app/
│   ├── App.tsx
│   ├── App.module.css
│   └── providers/
│       └── query-provider.tsx
│
├── features/
│   ├── geocoding/
│   │   ├── components/
│   │   │   └── LocationSearch.tsx
│   │   ├── context/
│   │   │   ├── location-context.tsx
│   │   │   └── location-provider.tsx
│   │   ├── hooks/
│   │   │   ├── use-location.ts
│   │   │   └── use-location-search.ts
│   │   ├── mappers/
│   │   │   └── location.mapper.ts
│   │   ├── services/
│   │   │   └── geocoding.service.ts
│   │   └── types/
│   │       ├── location.ts
│   │       └── open-meteo-geocoding.ts
│   │
│   ├── weather/
│   │   ├── components/
│   │   │   ├── CurrentWeatherCard.tsx
│   │   │   ├── HourlyForecastCard.tsx
│   │   │   └── DailyForecastCard.tsx
│   │   ├── hooks/
│   │   │   └── use-weather-overview.ts
│   │   ├── mappers/
│   │   │   ├── current-weather.mapper.ts
│   │   │   ├── hourly-forecast.mapper.ts
│   │   │   └── daily-forecast.mapper.ts
│   │   ├── services/
│   │   │   └── weather-overview.service.ts
│   │   ├── types/
│   │   │   ├── current-weather.ts
│   │   │   ├── hourly-forecast.ts
│   │   │   ├── daily-forecast.ts
│   │   │   └── open-meteo.ts
│   │   └── utils/
│   │       └── weather-codes.ts
│   │
│   ├── air-quality/
│   │   ├── components/
│   │   │   └── AirQualityCard.tsx
│   │   ├── hooks/
│   │   │   └── use-air-quality.ts
│   │   ├── mappers/
│   │   │   └── air-quality.mapper.ts
│   │   ├── services/
│   │   │   └── air-quality.service.ts
│   │   └── types/
│   │       ├── air-quality.ts
│   │       └── open-meteo-air-quality.ts
│   │
│   ├── history/
│   │   ├── components/
│   │   │   └── HistoricalWeatherCard.tsx
│   │   ├── hooks/
│   │   │   └── use-historical-weather.ts
│   │   ├── mappers/
│   │   │   └── historical-weather.mapper.ts
│   │   ├── services/
│   │   │   └── historical-weather.service.ts
│   │   └── types/
│   │       ├── historical-weather.ts
│   │       └── open-meteo-historical.ts
│   │
│   ├── favourites/
│   │   ├── hooks/
│   │   │   └── use-favorites.ts
│   │   ├── services/
│   │   │   └── favorites.service.ts
│   │   └── types/
│   │       └── favorite-location.ts
│   │
│   └── theme/
│       ├── components/
│       │   ├── theme-toggle.tsx
│       │   └── theme-toggle.module.css
│       ├── context/
│       │   ├── theme-context.ts
│       │   └── theme-provider.tsx
│       └── hooks/
│           └── use-theme.ts
│
├── pages/
│   ├── Dashboard/
│   │   ├── DashboardPage.tsx
│   │   └── DashboardPage.module.css
│   ├── DailyForecast/
│   │   ├── DailyForecastPage.tsx
│   │   └── DailyForecastPage.module.css
│   ├── Historical/
│   │   ├── HistoricalPage.tsx
│   │   └── HistoricalPage.module.css
│   └── Search/
│       └── ...
│
├── shared/
│   ├── services/
│   │   └── openMeteoClient.ts
│   ├── hooks/
│   │   └── useSelectedLocation.ts
│   └── types/
│
├── routes/
│   └── router.tsx
│
├── index.css
└── main.tsx
```

---

## Core Architectural Principles

### 1. Separation of Concerns

Components focus on rendering.

Services focus on data retrieval.

Mappers transform external data.

### 2. Domain Models

Example:

```ts
export interface CurrentWeather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
}
```

UI components consume domain models rather than raw API payloads.

### 3. Query-Based Data Management

TanStack Query will manage:

- Fetching
- Caching
- Background refetching
- Request deduplication
- Loading states

### 4. Feature Isolation

Weather functionality should remain independent from:

- Air Quality
- Historical Data
- Geocoding

Each feature owns its logic.

---

## MVP Scope

### Dashboard

Displays:

- Current weather
- Hourly forecast
- 7-day forecast
- Air quality summary

### 7-Day Forecast

- Extended outlook as a separate feature/page
- Daily summary for 7 days ahead

### Search

Search locations through geocoding.

### Historical Weather

Search weather conditions by:

- Location
- Date range

### Favorites

Persist favorite locations.

### Recent Searches

Persist search history.

---

## Future Enhancements

### Phase 2

- Weather alerts
- PWA support
- Offline caching

### Phase 3

- Interactive weather maps
- User accounts
- Saved dashboards
- Multi-location comparisons

---

## Non-Functional Goals

### Performance

- Query caching
- Lazy loading
- Route-based code splitting

### Maintainability

- Strict TypeScript
- Shared component patterns
- Centralized API layer

### Scalability

- Feature-first architecture
- Clear boundaries
- Reusable services

---

## Success Criteria

The project is successful if it demonstrates:

- Effective API consumption
- Strong TypeScript practices
- Clean architecture
- Reusable abstractions
- Good developer experience
- Fast feature implementation

---

## Running the Project

```bash
npm install
npm run dev
```

---

## Testing

Unit and integration tests are included for mapper functions and key UI flows.

```bash
# Run tests once
npm run test:run

# Run tests in watch mode
npm run test
```

---

## Key Learning Outcomes

- Consuming multiple external APIs
- Designing service layers
- Building scalable React applications
- Managing asynchronous data
- Data transformation and mapping
- Weather data visualization
- Feature-based architecture

---

## Project Vision

Meteomania is intended to showcase engineering maturity through thoughtful architecture, clean abstractions, and maintainable code while delivering a polished weather experience.
