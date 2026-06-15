import { createBrowserRouter } from 'react-router-dom';

import { DashboardPage } from '@/pages/Dashboard/DashboardPage';
import { DailyForecastPage } from '@/pages/DailyForecast/DailyForecastPage';
import { HistoricalPage } from '@/pages/Historical/HistoricalPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/daily-forecast',
    element: <DailyForecastPage />,
  },
  {
    path: '/historical',
    element: <HistoricalPage />,
  },
]);
