import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LocationProvider } from "@/features/geocoding/context/location-provider";
import { ThemeProvider } from "@/features/theme/context/theme-provider";
import { ThemeToggle } from "@/features/theme/components/theme-toggle";

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
}

function renderWithProviders(ui: React.ReactElement) {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocationProvider>{ui}</LocationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

describe("ThemeToggle integration", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("renders moon icon in light mode", () => {
    renderWithProviders(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    expect(button.getAttribute("aria-label")).toBe("Switch to dark mode");
  });

  it("toggles to dark mode when clicked", () => {
    renderWithProviders(<ThemeToggle />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button.getAttribute("aria-label")).toBe("Switch to light mode");
  });

  it("applies data-theme attribute to document", () => {
    localStorage.setItem("theme", "light");
    renderWithProviders(<ThemeToggle />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    fireEvent.click(screen.getByRole("button"));
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
