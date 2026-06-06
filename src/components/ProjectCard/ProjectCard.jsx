import { RiGithubLine, RiExternalLinkLine, RiTimeLine } from 'react-icons/ri';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const isComingSoon = project.status === 'coming-soon';

  return (
    <article className={`${styles.card} ${isComingSoon ? styles.comingSoon : ''}`}>
      <div className={styles.imageArea}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.projectEmoji}>{project.emoji}</span>
        </div>
        {isComingSoon && (
          <div className={styles.badge}>
            <RiTimeLine size={12} />
            Coming Soon
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${isComingSoon ? styles.disabled : ''}`}
          aria-label="View on GitHub"
        >
          <RiGithubLine size={16} />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.linkPrimary} ${isComingSoon ? styles.disabled : ''}`}
          aria-label="View live demo"
        >
          <RiExternalLinkLine size={16} />
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
