import styles from './TimelineItem.module.css';

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`${styles.item} ${isLeft ? styles.left : styles.right}`}>
      <div className={styles.content}>
        <span className={styles.year}>{item.year}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
        {item.type === 'current' && (
          <span className={styles.currentBadge}>● In Progress</span>
        )}
      </div>
      <div className={styles.dot}>
        <span className={styles.icon}>{item.icon}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
