import { useState } from "react";

import { useLocationSearch } from "../hooks/use-location-search";
import { useLocation } from "../hooks/use-location";

export function LocationSearch() {
  const [query, setQuery] = useState("");

  const { setLocation } = useLocation();

  const { data } = useLocationSearch(query);

  return (
    <div>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search city..."
      />
      {query.length >= 2 && (
        <ul>
          {data?.map((location) => (
            <li
              key={location.id}
              onClick={() => {
                setLocation(location);
                setQuery("");
              }}
              style={{
                cursor: "pointer",
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
