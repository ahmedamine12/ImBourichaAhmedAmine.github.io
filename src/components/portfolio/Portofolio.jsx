import React, { useState } from 'react'
import './portfolio.css'
import { BiFolder } from 'react-icons/bi'
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaMobileAlt, FaRobot, FaDatabase, FaMapMarkedAlt, FaVirus, FaPalette, FaMousePointer } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import ProjectModal from './ProjectModal'
import TechTooltip from './TechTooltip'
import { useTranslation } from 'react-i18next'

const iconMap = {
  FaLaptopCode: <FaLaptopCode />,
  FaMobileAlt: <FaMobileAlt />,
  FaRobot: <FaRobot />,
  FaDatabase: <FaDatabase />,
  FaMapMarkedAlt: <FaMapMarkedAlt />,
  FaVirus: <FaVirus />,
  FaPalette: <FaPalette />,
  FaMousePointer: <FaMousePointer />,
};

const Portofolio = () => {
  const [modalProject, setModalProject] = useState(null)
  const { t, i18n } = useTranslation();
  const translatedProjects = t('projects.list', { returnObjects: true });
  const academicProjects = t('projects.academicList', { returnObjects: true }) || [];
  return (
    <section id='portfolio' className='section-fade-in'>
      <h2>{t('projects.experience')}</h2>
      <div className="container timeline-container">
        <div className="timeline">
          {translatedProjects.map((project, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div className="project-card featured timeline-card" tabIndex={0}>
                <div className="project-meta">
                  <span className="project-date">{project.date}</span>
                  <span className="project-role">{project.role}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}><MdVerified /> {tech}</span>
                  ))}
                </div>
                {project.achievement && (
                  <div className="project-achievement">
                    <span>🚀 {project.achievement}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>{t('projects.academic')}</h2>
      <div className="container projects-scroll-container">
        <div className="projects-grid">
          {academicProjects.map((project, idx) => (
            <div className="project-card academic-card" key={idx} tabIndex={0}>
              <div className="project-meta">
                {project.icon && (
                  <span className="project-icon">{iconMap[project.icon]}</span>
                )}
                {project.category && (
                  <span className={`project-category-pill ${project.category ? project.category.toLowerCase() : ''}`}>
                    {project.category}
                  </span>
                )}
                <span className="project-role">{project.role}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}><MdVerified /> {tech}</span>
                ))}
              </div>
              {project.github && (
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                </div>
              )}
              {project.funfact && (
                <div className="project-funfact-pill">{project.funfact}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portofolio