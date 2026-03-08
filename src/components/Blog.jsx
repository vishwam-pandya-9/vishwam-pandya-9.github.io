import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { blogPosts } from '../data/blogPosts';
import styles from './Blog.module.css';

export const Blog = () => {
  const ref = useIntersectionObserver();

  return (
    <section ref={ref} id="blog" className={`${styles.blog} slide-up`}>
      <div className={styles.container}>
        <h2>Latest Articles</h2>
        <p className={styles.subtitle}>
          Insights on web development, AI, and software engineering
        </p>

        <div className={styles.posts}>
          {blogPosts.map((post) => (
            <article key={post.id} className={`${styles.post} glass stagger`}>
              <div className={styles.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>

              <h3>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>

              <div className={styles.footer}>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={styles.readTime}>{post.readTime} min read</span>
              </div>

              <a href={`/#blog/${post.slug}`} className={styles.link}>
                Read Article →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
