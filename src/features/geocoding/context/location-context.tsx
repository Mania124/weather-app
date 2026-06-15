import { createContext } from "react";
import type { Location } from "../types/location";

export interface LocationContextType {
  location: Location;
  setLocation: (location: Location) => void;
}

export const LocationContext = createContext<LocationContextType | null>(null);
