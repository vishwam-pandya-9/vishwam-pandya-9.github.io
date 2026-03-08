import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Contact.module.css';

export const Contact = () => {
  const ref = useIntersectionObserver();

  return (
    <section ref={ref} id="contact" className={`${styles.contact} slide-up`}>
      <div className={styles.container}>
        <h2>Let's Connect</h2>
        <p className={styles.subtitle}>
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className={`${styles.card} glass`}>
          <div className={styles.content}>
            <p>
              Whether you want to collaborate on a project, discuss the latest in AI/ML,
              or just grab a virtual coffee, I'd love to hear from you!
            </p>

            <div className={styles.links}>
              <a
                href="mailto:your.email@example.com"
                className={styles.link}
              >
                📧 Email
              </a>
              <a
                href="https://github.com/pandyax"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                💻 GitHub
              </a>
              <a
                href="https://linkedin.com/in/vishwam-pandya"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                💼 LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                𝕏 Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
