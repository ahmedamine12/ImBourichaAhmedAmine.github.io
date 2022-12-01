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
            Currently studying software engineering at the Mohammedia
             Faculty of Science and Technology.I am motivated and I try 
             to do my best to improve my skills in different areas axes of 
             T and especially the IT development and AI side.As well as I am 
             interested in the various extracurricular activities such as 
             articipation in clubs in different fields, attendance at conferences 
             and forums that interest me, and without forgetting participation 
             in programming competitions.
          </p>
          <small className='Myquote'> Finally I am sure that I can always do better because I am passionate about this field.</small>
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