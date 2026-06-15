import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router';
import { ThemeToggle } from '@/features/theme/components/theme-toggle';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.layout}>
      <ThemeToggle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;