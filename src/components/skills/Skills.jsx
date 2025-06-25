import React from 'react'
import './skills.css'
import { FiDatabase } from 'react-icons/fi'
import { VscOutput } from 'react-icons/vsc'
import { BiCodeAlt } from 'react-icons/bi'
import { SiDiagramsdotnet } from 'react-icons/si'
import { MdVerified } from 'react-icons/md'
import { FaCloud } from 'react-icons/fa'
import { BiUserCheck } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

const Skills = () => {
    const { t } = useTranslation();
    return (
        <section id='skills' className='section-fade-in'>
            <h2>{t('skills.title')}</h2>
            <div className='container skills__container'>
                <div className='skills__cards'>
                    <article className='skills__card'>
                        <div className='skills__icons-bg'><VscOutput className='skills__icons' /></div>
                        <h3>{t('skills.programming')}</h3>
                        <h4>
                            <ol>
                                <li value=""> <MdVerified /> C/C++</li>
                                <li value=""> <MdVerified /> C#</li>
                                <li value=""> <MdVerified /> PL/SQL</li>
                                <li value=""> <MdVerified /> Java</li>
                                <li value=""> <MdVerified /> JavaScript</li>
                                <li value=""> <MdVerified /> Python</li>
                                <li value=""> <MdVerified /> PHP</li>
                            </ol>
                        </h4>
                    </article>

                    <article className='skills__card'>
                        <div className='skills__icons-bg'><BiCodeAlt className='skills__icons' /></div>
                        <h3>{t('skills.web')}</h3>
                        <h4>
                            <ol className='list__techno'>
                                <li value=""> <MdVerified /> HTML5</li>
                                <li value=""> <MdVerified /> CSS3</li>
                                <li value=""> <MdVerified /> Node.js</li>
                                <li value=""> <MdVerified /> Laravel</li>
                                <li value=""> <MdVerified /> Java EE</li>
                                <li value=""> <MdVerified /> Angular</li>
                                <li value=""> <MdVerified /> React</li>
                                <li value=""> <MdVerified /> Spring Boot</li>
                            </ol>
                        </h4>
                    </article>

                    <article className='skills__card'>
                        <div className='skills__icons-bg'><FaCloud className='skills__icons' /></div>
                        <h3>{t('skills.devops')}</h3>
                        <h4>
                            <ol>
                                <li value=""> <MdVerified /> Docker</li>
                                <li value=""> <MdVerified /> Kubernetes</li>
                                <li value=""> <MdVerified /> Jenkins</li>
                                <li value=""> <MdVerified /> Google Cloud</li>
                            </ol>
                        </h4>
                    </article>

                    <article className='skills__card'>
                        <div className='skills__icons-bg'><FiDatabase className='skills__icons' /></div>
                        <h3>{t('skills.databases')}</h3>
                        <h4>
                            <ol>
                                <li value=""> <MdVerified /> Oracle</li>
                                <li value=""> <MdVerified /> MySQL</li>
                                <li value=""> <MdVerified /> MongoDB</li>
                                <li value=""> <MdVerified /> PostgreSQL</li>
                            </ol>
                        </h4>
                    </article>

                    <article className='skills__card'>
                        <div className='skills__icons-bg'><SiDiagramsdotnet className='skills__icons' /></div>
                        <h3>{t('skills.design')}</h3>
                        <h4>
                            <ol>
                                <li value=""> <MdVerified /> Merise</li>
                                <li value=""> <MdVerified /> UML</li>
                                <li value=""> <MdVerified /> Design Patterns</li>
                                <li value=""> <MdVerified /> SCRUM</li>
                            </ol>
                        </h4>
                    </article>

                    <article className='skills__card'>
                        <div className='skills__icons-bg'><BiUserCheck className='skills__icons' /></div>
                        <h3>{t('skills.managerial')}</h3>
                        <h4>
                            <ol>
                                <li value=""> <MdVerified /> {t('skills.managerial_skills.adaptability')}</li>
                                <li value=""> <MdVerified /> {t('skills.managerial_skills.autonomy')}</li>
                                <li value=""> <MdVerified /> {t('skills.managerial_skills.project_management')}</li>
                                <li value=""> <MdVerified /> {t('skills.managerial_skills.problem_solving')}</li>
                            </ol>
                        </h4>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Skills