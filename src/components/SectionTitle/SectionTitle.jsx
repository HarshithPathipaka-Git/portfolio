import styles from './SectionTitle.module.css';

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  return (
    <div className={styles.wrapper} style={{ textAlign: align }}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
