import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './About.module.css';

export const About = () => {
  const ref = useIntersectionObserver();

  return (
    <section ref={ref} id="about" className={`${styles.about} slide-up`}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a Senior Software Development Engineer (SDE III) at Audible with 5+ years of experience
              building scalable applications and designing elegant user interfaces.
            </p>
            <p>
              My expertise spans full-stack development with a strong focus on React, Node.js, and cloud technologies.
              Recently, I've been diving deep into generative AI and machine learning, exploring how LLMs can transform
              the way we build software.
            </p>
            <p>
              When I'm not coding, I'm probably reading about the latest AI breakthroughs, contributing to open-source projects,
              or brainstorming the next big idea.
            </p>
          </div>

          <div className={`${styles.skills} glass`}>
            <h3>Skills & Technologies</h3>
            <div className={styles.skillsList}>
              <div className={styles.skillGroup}>
                <h4>Frontend</h4>
                <div className={styles.tags}>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                  <span>Vue</span>
                </div>
              </div>
              <div className={styles.skillGroup}>
                <h4>Backend</h4>
                <div className={styles.tags}>
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className={styles.skillGroup}>
                <h4>AI/ML</h4>
                <div className={styles.tags}>
                  <span>LLMs</span>
                  <span>Prompt Engineering</span>
                  <span>GenAI</span>
                  <span>APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
