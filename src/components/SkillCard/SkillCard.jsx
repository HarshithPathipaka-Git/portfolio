import styles from './SkillCard.module.css';

const iconMap = {
  html: '🌐',
  css: '🎨',
  js: '⚡',
  react: '⚛️',
  python: '🐍',
  node: '🟢',
  git: '🔀',
  github: '🐙',
  vscode: '💻',
  vercel: '▲',
  db: '🗄️',
  api: '🔌',
  fullstack: '🏗️',
};

const SkillCard = ({ skill }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.icon}>{iconMap[skill.icon] || '⚙️'}</span>
        <div className={styles.info}>
          <span className={styles.name}>{skill.name}</span>
          {skill.tag && <span className={styles.tag}>{skill.tag}</span>}
        </div>
        <span className={styles.percent}>{skill.level}%</span>
      </div>
      <div className={styles.barBg}>
        <div
          className={styles.bar}
          style={{ '--target-width': `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
