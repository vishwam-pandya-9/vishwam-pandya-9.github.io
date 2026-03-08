import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  return (
    <div className={`${styles.card} glass stagger`}>
      <div className={styles.image}>
        <div className={styles.placeholder}>
          {project.icon || '💻'}
        </div>
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};
