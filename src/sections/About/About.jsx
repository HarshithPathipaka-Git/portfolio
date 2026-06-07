import SectionTitle from '../../components/SectionTitle';
import { RiGraduationCapLine, RiBriefcaseLine, RiRocketLine, RiCodeSSlashLine } from 'react-icons/ri';
import styles from './About.module.css';

const cards = [
  {
    icon: <RiGraduationCapLine size={24} />,
    title: 'Education',
    content:
      'Currently pursuing a B.Tech in Computer Science and Engineering at SR University, Warangal, Telangana. Building a strong foundation in programming, web development, and problem-solving while exploring modern technologies.',
    highlight: 'B.Tech CSE',
  },
  {
    icon: <RiBriefcaseLine size={24} />,
    title: 'Career Objective',
    content:
      'Aspiring Full Stack Developer focused on building practical projects, improving technical skills, and gaining real-world development experience through continuous learning and hands-on work.',
    highlight: 'Future Developer',
  },
  {
    icon: <RiRocketLine size={24} />,
    title: 'Learning Journey',
    content:
      'Began with Python and gradually expanded into HTML, CSS, JavaScript, React, Git, and modern web development tools. I enjoy turning ideas into projects and learning through building.',
    highlight: 'Continuous Learning',
  },
];

const stats = [
  { number: '3+', label: 'Projects Built' },
  { number: '5+', label: 'Technologies Learned' },
  { number: '1st', label: 'Year B.Tech' },
  { number: '∞', label: 'Motivation' },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <SectionTitle
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A passionate CS student on a journey to become a full-stack developer — one project at a time."
        />

        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <div className={styles.cardBody}>
                <div className={styles.cardTag}>{card.highlight}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.intro}>
            <RiCodeSSlashLine className={styles.codeIcon} size={32} />
            <div>
              <h3 className={styles.introTitle}>Problem Solver at Heart</h3>
              <p className={styles.introText}>
                I believe in learning by building. My approach is simple: understand the fundamentals, 
                pick up the right tools, and ship real projects. I'm not afraid to break things — 
                every bug is a lesson, every feature is a story.
              </p>
            </div>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statNum}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
