import SectionTitle from '../../components/SectionTitle';
import TimelineItem from '../../components/TimelineItem';
import { timeline } from '../../data/timeline';
import styles from './Journey.module.css';

const Journey = () => {
  return (
    <section id="journey" className={styles.journey}>
      <div className="container">
        <SectionTitle
          eyebrow="My Journey"
          title="The Road So Far"
          subtitle="A timeline of my programming journey — from writing my first line of code to building full applications."
        />

        <div className={styles.timeline}>
          <div className={styles.line} />
          <div className={styles.items}>
            {timeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
