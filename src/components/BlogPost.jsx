import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import styles from './BlogPost.module.css';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h2>Article not found</h2>
        <Link to="/" className={styles.back}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>← Back to Articles</Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </span>
            <span className={styles.readTime}>{post.readTime} min read</span>
          </div>

          <h1>{post.title}</h1>

          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </header>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
};
