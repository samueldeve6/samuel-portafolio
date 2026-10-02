import React from 'react'
import styles from './ProjectsStyles.module.css'
import innovatech from '../../assets/logoInnovatech.png'
import dashboard from '../../assets/dashboard.jpg'
import chatbot from '../../assets/chatbotweb.png'
import mediPrescript from '../../assets/mediprescript.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={innovatech}
          link="https://innova-tech-innovatech.vercel.app/"
          h3="InnovaTech"
          p="Tech Company Website"
        />

        <ProjectCard 
          src={dashboard}
          link="https://dashboard-project-coral-mu.vercel.app/"
          h3="Dashboard Project"
          p="Dashboard for E-commerce"
        />

        <ProjectCard 
          src={chatbot}
          link="https://chatbot-para-negocio.vercel.app/"
          h3="Studio Bella"
          p="Chatbot for Business"
        />

        <ProjectCard 
          src={mediPrescript}
          link="https://frontend-prescripciones-medicas.vercel.app/"
          h3="MediPrescript"
          p="Prescription Management System"
        />
        
      </div>
    </section>
  )
}

export default Projects