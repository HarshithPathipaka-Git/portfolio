import { useState, useEffect } from 'react';
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiArrowDownLine,
  RiDownload2Line,
  RiExternalLinkLine,
} from 'react-icons/ri';
import styles from './Hero.module.css';

const roles = [
  'Full Stack Developer Learner',
  'React Enthusiast',
  'Problem Solver',
  'CS Student',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={`${styles.badge} animate-fade-up`}>
            <span className={styles.dot} />
            Open to Internships
          </div>

          <h1 className={`${styles.name} animate-fade-up delay-100`}>
            Hi, I'm <span className={styles.accent}>Harshith Pathipaka</span>
          </h1>

          <div className={`${styles.roleRow} animate-fade-up delay-200`}>
            <span className={styles.roleStatic}>B.Tech CS · </span>
            <span className={styles.roleType}>
              {displayed}
              <span className={styles.cursor}>|</span>
            </span>
          </div>

          <p className={`${styles.bio} animate-fade-up delay-300`}>
            I am a Computer Science student passionate about Full Stack Development
            and building practical web applications. I enjoy learning modern technologies
            and turning ideas into real projects.
          </p>

          <div className={`${styles.cta} animate-fade-up delay-400`}>
            <button className="btn btn-primary" onClick={scrollToProjects}>
              <RiExternalLinkLine size={16} />
              View Projects
            </button>
            <button className="btn btn-outline" onClick={scrollToContact}>
              <RiMailLine size={16} />
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download
              className={`btn btn-outline ${styles.resumeBtn}`}
            >
              <RiDownload2Line size={16} />
              Resume
            </a>
          </div>

          <div className={`${styles.socials} animate-fade-up delay-500`}>
            <a href="https://github.com/HarshithPathipaka-Git" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <RiGithubLine size={20} />
            </a>
            <a href="https://linkedin.com/in/harshithpathipaka" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <RiLinkedinBoxLine size={20} />
            </a>
            <a href="mailto:harshithpathipaka.dev@gmail.com" className={styles.socialLink} aria-label="Email">
              <RiMailLine size={20} />
            </a>
          </div>
        </div>

        <div className={`${styles.right} animate-slide-right delay-300`}>
          <div className={styles.avatarFrame}>
            <div className={styles.avatarInner}>
              <div className={styles.avatarPlaceholder}>
                <span className={styles.avatarInitials}>H</span>
              </div>
            </div>
            <div className={styles.avatarRing} />
            <div className={styles.avatarBadge}>
              <span>👨‍💻</span>
              <span>CS Student</span>
            </div>
            <div className={styles.floatCard1}>
              <span>⚛️</span>
              <span>React</span>
            </div>
            <div className={styles.floatCard2}>
              <span>🐍</span>
              <span>Python</span>
            </div>
          </div>
        </div>
      </div>

      <button className={styles.scrollDown} onClick={scrollDown} aria-label="Scroll down">
        <RiArrowDownLine size={18} />
      </button>
    </section>
  );
};

export default Hero;
