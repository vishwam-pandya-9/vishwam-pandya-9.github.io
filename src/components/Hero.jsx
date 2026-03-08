import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Hero.module.css';

export const Hero = () => {
  const ref = useIntersectionObserver();

  return (
    <section ref={ref} className={`${styles.hero} slide-up`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Vishwam Pandya
          </h1>
          <p className={styles.subtitle}>
            Senior Software Engineer (SDE III) @ Audible
          </p>
          <p className={styles.description}>
            Building full-stack applications and designing beautiful interfaces.
            Passionate about generative AI, machine learning, and creating elegant solutions.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.primary}>
              View My Work →
            </a>
            <a href="#contact" className={styles.secondary}>
              Get in Touch
            </a>
          </div>
        </div>
        <div className={styles.gradient}></div>
      </div>
    </section>
  );
};
