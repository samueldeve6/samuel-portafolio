import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';
import SkillList from '../../common/SkillList'

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'dark' ? checkMarkIconDark : checkMarkIconLight;
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="Typescript" />
            <SkillList src={checkMarkIcon} skill="Node" />
        </div>
        <hr/>
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Angular" />
            <SkillList src={checkMarkIcon} skill="Vue" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </div>
        <hr/>
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill="Redux" />
            <SkillList src={checkMarkIcon} skill="Webpack" />
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="Jest" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
        </div>
        <hr/>
    
    </section>
  )
}

export default Skills