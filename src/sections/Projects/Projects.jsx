import SectionTitle from '../../components/SectionTitle';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import { RiGithubLine } from 'react-icons/ri';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="What I've Built"
          subtitle="Real projects I've built while learning — from simple experiments to full web applications."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.cta}>
          <p>More projects are on their way as I continue to learn and build.</p>
          <a
            href="https://github.com/HarshithPathipaka-Git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <RiGithubLine size={18} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
