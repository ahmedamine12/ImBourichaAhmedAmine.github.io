import React from 'react'
import './skills.css'
import { FiDatabase } from 'react-icons/fi'
import { VscOutput } from 'react-icons/vsc'
import { BiCodeAlt } from 'react-icons/bi'
import { SiDiagramsdotnet } from 'react-icons/si'
import { MdVerified } from 'react-icons/md'


const Skills = () => {
    return (

        <section className='skills__content' id='skills'>
            <h2>Some Technologies I’ve Used</h2>
            <div className='container skills__container'>
                <div className='skills__cards'>
                    <article className='skills__card' >
                        <  VscOutput className='skills__icons' />
                        <h3> Programming languages</h3>
                        <h4>
                            <ol>
                                <li value=""> <MdVerified /> C/C++</li>
                                <li value=""> <MdVerified /> Java</li>
                                <li value=""><MdVerified /> JavaScript</li>
                                <li value=""><MdVerified /> Python</li>
                                <li value=""> <MdVerified /> php</li>
                            </ol>
                        </h4>
                    </article>

                    <article className='skills__card'>
                        <  BiCodeAlt className='skills__icons' />
                        <h3> Web technology </h3>
                        <h4>
                            <ol className='list__techno'>
                                <li value=""> <MdVerified /> HTML5  CSS3</li>
                                <li value=""><MdVerified /> Laravel</li>
                                <li value=""> <MdVerified /> Angular</li>
                                <li value=""><MdVerified /> Java EE</li>
                                <li value=""><MdVerified /> React</li>
                                <li value=""><MdVerified /> Spring-boot</li>
                            </ol>
                        </h4>
                    </article>

                    <article className='skills__card'>
                        <  FiDatabase className='skills__icons' />
                        <h3> Database</h3>
                        <h4>
                            <ol>
                                <li value=""><MdVerified /> Oracle</li>
                                <li value=""><MdVerified /> Mysql</li>
                                <li value=""><MdVerified /> SqlServer</li>
                                <li value=""><MdVerified /> MongoDB</li>

                            </ol>
                        </h4>
                    </article>


                    <article className='skills__card'>
                        <  SiDiagramsdotnet className='skills__icons' />
                        <h3> Design and Methode</h3>
                        <h4>
                            <ol>
                                <li value=""><MdVerified /> UML</li>
                                <li value=""><MdVerified /> Merise</li>
                                <li value=""><MdVerified /> Design Patterns</li>
                                <li value=""><MdVerified /> Scrum</li>
                                <li value=""><MdVerified />TDD</li>
                            </ol>
                        </h4>
                    </article>

                </div>










            </div>
        </section>
    )
}

export default Skills