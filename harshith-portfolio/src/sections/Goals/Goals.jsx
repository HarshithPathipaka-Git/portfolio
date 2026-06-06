import SectionTitle from '../../components/SectionTitle';
import { RiCheckboxCircleLine, RiStarLine, RiArrowRightLine } from 'react-icons/ri';
import styles from './Goals.module.css';

const currentGoals = [
  {
    icon: '🏗️',
    title: 'Master Full Stack Development',
    desc: 'Learn and build with both frontend and backend technologies — React, Node.js, and databases.',
    progress: 40,
  },
  {
    icon: '🚀',
    title: 'Build Real Projects',
    desc: 'Ship projects that solve actual problems and showcase skills to potential employers.',
    progress: 55,
  },
  {
    icon: '🌐',
    title: 'Open Source Contributions',
    desc: 'Contribute to open source repositories to collaborate with the developer community.',
    progress: 15,
  },
  {
    icon: '💼',
    title: 'Internship Preparation',
    desc: 'Build a strong portfolio, sharpen DSA skills, and prepare for technical interviews.',
    progress: 50,
  },
];

const futureGoals = [
  {
    icon: '⚙️',
    title: 'Full Stack Engineer',
    desc: 'Land a full-time role as a Full Stack Developer at a product-driven company.',
  },
  {
    icon: '📦',
    title: 'Build Scalable Products',
    desc: 'Design and architect production-grade applications that handle real users at scale.',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    desc: 'Stay updated with evolving technologies — cloud, AI integration, and system design.',
  },
];

const Goals = () => {
  return (
    <section id="goals" className={styles.goals}>
      <div className="container">
        <SectionTitle
          eyebrow="Goals"
          title="Where I'm Headed"
          subtitle="My current focus and long-term vision as a developer."
        />

        <div className={styles.layout}>
          <div className={styles.current}>
            <div className={styles.sectionLabel}>
              <RiCheckboxCircleLine size={16} />
              Current Goals
            </div>
            <div className={styles.goalGrid}>
              {currentGoals.map((goal) => (
                <div key={goal.title} className={styles.goalCard}>
                  <div className={styles.goalTop}>
                    <span className={styles.goalIcon}>{goal.icon}</span>
                    <div className={styles.goalInfo}>
                      <h3 className={styles.goalTitle}>{goal.title}</h3>
                      <p className={styles.goalDesc}>{goal.desc}</p>
                    </div>
                  </div>
                  <div className={styles.goalProgress}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ '--target': `${goal.progress}%` }}
                      />
                    </div>
                    <span className={styles.progressNum}>{goal.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.future}>
            <div className={styles.sectionLabel}>
              <RiStarLine size={16} />
              Future Vision
            </div>
            <div className={styles.futureList}>
              {futureGoals.map((goal) => (
                <div key={goal.title} className={styles.futureCard}>
                  <span className={styles.futureIcon}>{goal.icon}</span>
                  <div>
                    <h3 className={styles.futureTitle}>{goal.title}</h3>
                    <p className={styles.futureDesc}>{goal.desc}</p>
                  </div>
                  <RiArrowRightLine className={styles.arrow} size={18} />
                </div>
              ))}
            </div>

            <div className={styles.motivationCard}>
              <span className={styles.quote}>"</span>
              <p className={styles.quoteText}>
                The best way to learn is to build. Every project teaches you something
                you couldn't have learned from a tutorial.
              </p>
              <span className={styles.quoteAuthor}>— My Developer Philosophy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
