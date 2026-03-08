import { useState, useMemo } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

export const Projects = () => {
  const ref = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState('All');

  const allTags = useMemo(() => {
    const tags = new Set(['All']);
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section ref={ref} id="projects" className={`${styles.projects} slide-up`}>
      <div className={styles.container}>
        <h2>Featured Projects</h2>

        <div className={styles.filters}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filter} ${activeFilter === tag ? styles.active : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className={styles.empty}>No projects found with this tag.</p>
        )}
      </div>
    </section>
  );
};
