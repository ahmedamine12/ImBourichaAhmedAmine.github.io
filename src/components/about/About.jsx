import React from 'react'
import './about.css'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();
  const funFacts = t('about.funfacts', { returnObjects: true }) || [];

  return (
    <section id='about' className='section-fade-in'>
      <h2>{t('about.title')}</h2>
      <div className='container about__container'>
        <div className='about__content about-glass-card floating-card'>
          <ImQuotesLeft className='icone_quote2 animated-quote' />
          <p>
            {t('about.content')}
          </p>
          <div className="about-funfacts">
            {funFacts.map((fact, i) => (
              <span className="about-funfact-pill" key={i}>{fact}</span>
            ))}
          </div>
          <div className="about-signature animated-signature">
            — Bouricha Ahmed Amine
          </div>
          <ImQuotesRight className='icone_quote animated-quote' />
          <div className='about-quote-animated'>
            <span className="about-quote">{t('about.quote')}</span>
          </div>
          <div className='talk'>
            <a href="#contact" className='btn btn-primary'>{t('contact.send')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About