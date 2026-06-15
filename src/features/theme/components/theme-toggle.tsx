import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/use-theme";
import styles from "./theme-toggle.module.css";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
