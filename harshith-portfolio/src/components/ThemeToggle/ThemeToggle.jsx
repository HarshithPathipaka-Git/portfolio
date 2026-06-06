import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className={styles.track}>
        <span className={`${styles.thumb} ${theme === 'dark' ? styles.thumbDark : ''}`}>
          {theme === 'dark' ? <RiMoonLine /> : <RiSunLine />}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
