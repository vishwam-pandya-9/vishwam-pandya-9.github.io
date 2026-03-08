import { useTheme } from '../hooks/useTheme';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`${styles.nav} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/#">VP</a>
        </div>

        <ul className={styles.links}>
          <li><a href="/#about">About</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#blog">Blog</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>

        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};
