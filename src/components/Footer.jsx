import styles from './Footer.module.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {year} Vishwam Pandya. All rights reserved.
        </p>
        <p className={styles.credits}>
          Designed & Built with React & Vite
        </p>
      </div>
    </footer>
  );
};
