import {  useState } from 'react';
import type { PropsWithChildren } from 'react';
import { DEFAULT_LOCATION } from '@/shared/hooks/useSelectedLocation';
import { LocationContext } from './location-context';

export function LocationProvider({
  children,
}: PropsWithChildren) {
  const [location, setLocation] =
    useState(DEFAULT_LOCATION);

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}