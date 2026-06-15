import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router';
import { ThemeToggle } from '@/features/theme/components/theme-toggle';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.layout}>
      <ThemeToggle />
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>Dashboard</a>
        <a href="/daily-forecast" className={styles.link}>7-Day Forecast</a>
        <a href="/historical" className={styles.link}>Historical</a>
      </nav>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
