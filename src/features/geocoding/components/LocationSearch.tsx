import { useState } from "react";

import { useLocationSearch } from "../hooks/use-location-search";
import { useLocation } from "../hooks/use-location";
import styles from "./LocationSearch.module.css";

export function LocationSearch() {
  const [query, setQuery] = useState("");

  const { setLocation } = useLocation();

  const { data } = useLocationSearch(query);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search city..."
      />
      {query.length >= 2 && data && data.length > 0 && (
        <ul className={styles.list}>
          {data.map((location) => (
            <li
              key={location.id}
              className={styles.item}
              onClick={() => {
                setLocation(location);
                setQuery("");
              }}
            >
              {location.name}, {location.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
