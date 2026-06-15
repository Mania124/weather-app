import { useState } from "react";

import { useLocationSearch } from "../hooks/use-location-search";

export function LocationSearch() {
  const [query, setQuery] = useState("");

  const { data } = useLocationSearch(query);

  return (
    <div>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search city..."
      />

      <ul>
        {data?.map((location) => (
          <li key={location.id}>
            {location.name}, {location.country}
          </li>
        ))}
      </ul>
    </div>
  );
}
