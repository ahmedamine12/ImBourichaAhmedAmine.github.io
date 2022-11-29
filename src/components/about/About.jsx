import React from 'react'
import './about.css'
import ME from '../../assets/me3-removebg-preview1.png'
import { ImQuotesLeft } from 'react-icons/im'
import { ImQuotesRight } from 'react-icons/im'

const about = () => {
  return (
    <section id='about' >
      <h5>Get to know </h5>
      <h2 >About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          < ImQuotesLeft className='icone_quote2' />
          
          <p>
            Currently studying software engineering at the Mohammedia Faculty of Science and Technology.
            I am motivated and I try to do my best in order to improve my skills in different areas axes of IT and especially the IT development side.
            As well as I am interested in the various extracurricular activities such as participation in clubs in different fields, attendance at conferences and forums that interest me and without
            forgetting participation in programming competitions.
            Finally I can always do better because i love what I do.
          </p>
          <ImQuotesRight className='icone_quote' />

          <div className='talk'>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about