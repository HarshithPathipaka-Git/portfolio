import { RiGithubLine, RiLinkedinBoxLine, RiMailLine, RiHeartFill } from 'react-icons/ri';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <RiGithubLine size={18} />, href: 'https://github.com/HarshithPathipaka-Git', label: 'GitHub' },
  { icon: <RiLinkedinBoxLine size={18} />, href: 'https://linkedin.com/in/harshithpathipaka', label: 'LinkedIn' },
  { icon: <RiMailLine size={18} />, href: 'mailto:harshithpathipaka.dev@gmail.com', label: 'Email' },
];

const Footer = () => {
  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            <span className={styles.logoAccent}>H</span>arshith <span className={styles.logoAccent}>P</span>athipaka
          </span>
          <p className={styles.tagline}>
            B.Tech CS Student · Full Stack Developer Learner · Building one project at a time.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={styles.social}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={styles.link}
                  onClick={(e) => handleNav(e, l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contact}>
          <h4 className={styles.colTitle}>Get In Touch</h4>
          <p className={styles.contactText}>
            Open to internship opportunities, collaborations, and learning experiences.
          </p>
          <a href="mailto:harshithpathipaka.dev@gmail.com" className={styles.emailBtn}>
            <RiMailLine size={15} />
            harshithpathipaka.dev@gmail.com
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">

           <p className={styles.copy}>
           <span className={styles.heart}>
              Made with <RiHeartFill size={12} /> by Harshith Pathipaka
            </span>
          </p>
          <p className={styles.copy}>
            © 2026 All Rights Reserved.{' '}
            
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
