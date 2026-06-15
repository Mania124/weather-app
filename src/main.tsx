import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LocationProvider } from '@/features/geocoding/context/location-provider';
import App from '@/app/App';
import { QueryProvider } from '@/app/providers/query-provider';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <LocationProvider>
        <App />
      </LocationProvider>
    </QueryProvider>
  </StrictMode>
);