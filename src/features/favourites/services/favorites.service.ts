import type { FavoriteLocation } from "../types/favorite-location";

const STORAGE_KEY = "meteomania-favourites";

export function getFavorites(): FavoriteLocation[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function addFavorite(location: Omit<FavoriteLocation, "id">): FavoriteLocation[] {
  const favorites = getFavorites();
  const newFavorite: FavoriteLocation = {
    ...location,
    id: `${location.latitude}-${location.longitude}-${Date.now()}`,
  };
  const updated = [...favorites, newFavorite];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function removeFavorite(id: string): FavoriteLocation[] {
  const favorites = getFavorites();
  const updated = favorites.filter((fav) => fav.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function isFavorite(
  latitude: number,
  longitude: number
): boolean {
  return getFavorites().some(
    (fav) => fav.latitude === latitude && fav.longitude === longitude
  );
}
