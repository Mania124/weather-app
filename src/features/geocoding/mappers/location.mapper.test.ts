import { describe, it, expect } from "vitest";
import { mapLocations } from "./location.mapper";
import type { OpenMeteoGeocodingResponse } from "../types/open-meteo-geocoding";

const mockResponse: OpenMeteoGeocodingResponse = {
  results: [
    {
      id: 123,
      name: "Nairobi",
      latitude: -1.2921,
      longitude: 36.8219,
      country: "Kenya",
      admin1: "Nairobi",
      timezone: "Africa/Nairobi",
    },
  ],
};

describe("mapLocations", () => {
  it("maps Open-Meteo geocoding response to Location array", () => {
    const result = mapLocations(mockResponse);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      id: "123",
      name: "Nairobi",
      country: "Kenya",
      latitude: -1.2921,
      longitude: 36.8219,
      timezone: "Africa/Nairobi",
    });
  });

  it("handles empty admin1", () => {
    const noAdminResponse: OpenMeteoGeocodingResponse = {
      results: [
        {
          id: 123,
          name: "Nairobi",
          latitude: -1.2921,
          longitude: 36.8219,
          country: "Kenya",
          admin1: "",
          timezone: "Africa/Nairobi",
        },
      ],
    };
    const result = mapLocations(noAdminResponse);
    expect(result[0].name).toBe("Nairobi");
    expect(result[0].country).toBe("Kenya");
  });

  it("returns empty array when results is undefined", () => {
    const emptyResponse: OpenMeteoGeocodingResponse = {
      results: undefined,
    };
    const result = mapLocations(emptyResponse);
    expect(result).toHaveLength(0);
  });
});
