import { useState, useCallback } from "react";
import type { FavoriteLocation } from "../types/favorite-location";
import { getFavorites, addFavorite, removeFavorite, isFavorite } from "../services/favorites.service";

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteLocation[]>(() => getFavorites());

  const add = useCallback((location: Omit<FavoriteLocation, "id">) => {
    const updated = addFavorite(location);
    setFavorites(updated);
  }, []);

  const remove = useCallback((id: string) => {
    const updated = removeFavorite(id);
    setFavorites(updated);
  }, []);

  const check = useCallback(
    (latitude: number, longitude: number) => {
      return isFavorite(latitude, longitude);
    },
    []
  );

  return { favorites, add, remove, isFavorite: check };
}
