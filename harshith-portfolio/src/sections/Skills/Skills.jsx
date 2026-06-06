import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import SkillCard from '../../components/SkillCard';
import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const displayCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="My Tech Stack"
          subtitle="Technologies and tools I've been learning and building with."
        />

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.active : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {displayCategories.map((category) => (
          <div key={category.id} className={styles.category}>
            <div className={styles.catHeader}>
              <span className={styles.catIcon}>{category.icon}</span>
              <h3 className={styles.catLabel}>{category.label}</h3>
              <span className={styles.catCount}>{category.skills.length} skills</span>
            </div>
            <div className={styles.skillGrid}>
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}

        <div className={styles.note}>
          <span>📚</span>
          <p>
            Actively learning and improving every day. Proficiency levels are honest self-assessments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
