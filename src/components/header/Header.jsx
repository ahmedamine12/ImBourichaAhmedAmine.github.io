import React from 'react'
import CTA from './CTA'
import ME from '../../assets/proPic.JPG'
import HeaderSocials from './HeaderSocials'
import './header.css'
import { useTranslation } from 'react-i18next'

const FloatingBlobs = () => (
  <>
    <div className="floating-blob blob1"></div>
    <div className="floating-blob blob2"></div>
    <div className="floating-blob blob3"></div>
    <div className="floating-blob blob4"></div>
  </>
);

const Header = () => {
    const { t } = useTranslation();
    return (
      <header>
        <div className="hero-blob hero-blob1"></div>
        <div className="hero-blob hero-blob2"></div>
        <div className="hero-blob hero-blob3"></div>
        <div className="container header__container">
          <FloatingBlobs />
          <div className='me-glass-wrapper floating-profile'>
            <div className='me-glass-border'>
              <img src={ME} alt="me" className='me-img' />
            </div>
          </div>
          <div className="header-glass-card magic-fade-in">
            <h1 className="big-gradient-name animated-gradient">Bouricha Ahmed Amine</h1>
            <h5 className="text-light" style={{fontSize: '1.3rem', marginBottom: '1.5rem'}}>{t('header.role')}</h5>
            <div className="welcome-fade-in">{t('welcome_portfolio')}</div>
            <CTA />
            <HeaderSocials/>
          </div>
          <div className='scroll__down-wrapper'>
            <a href="#contact" className='scroll__down'>
              <span className='scroll-arrow-circle floatScrollArrow'>
                <span className='scroll-arrow-simple'>▼</span>
              </span>
              <span className='scroll-text'>{t('header.scroll')}</span>
            </a>
          </div>
        </div>
      </header>
    )
}

export default Header